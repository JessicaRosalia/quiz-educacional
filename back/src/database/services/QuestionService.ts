
import { Transaction } from 'sequelize/types'
import { QuestionUpdate } from '../../api/dto/Question'
import * as questionDal from '../dal/question'
import * as optionDal from '../dal/option'
import { sequelize } from '../models'
import { Option, OptionInput, OptionOutput } from '../models/Option'
import { Question, QuestionInput, QuestionOutput } from '../models/Question'
import { QuestionCategory, QuestionCategoryOutput } from '../models/QuestionCategory'
import { User, UserOutput } from '../models/User'

interface QuestionServiceInput extends QuestionInput {
    options: (OptionInput & { answer: boolean })[]
    userId: number,
    questionCategoryId: number,
}

interface QuestionServiceOutput extends QuestionOutput {
    options?: OptionOutput[],
    user?: UserOutput,
    category?: QuestionCategoryOutput
}


const testOptionAnswer = (options: boolean[], strict: boolean = false) => {
    let numOfAnswers = 0;
    let answerIndex = 0;
    options.forEach((option, index) => {
        numOfAnswers += option ? 1 : 0
        if (option) answerIndex = index
    })
    if (numOfAnswers > 1) {
        throw new Error("várias respostas fornecidas");
    }
    if (strict && numOfAnswers === 0) {
        throw new Error("nenhuma resposta fornecida");
    }
    return answerIndex;
}

export const create = async (payload: QuestionServiceInput): Promise<QuestionServiceOutput> => {
    const { options: optionsInput, ...inputQuestion } = payload

    let answerIndex = testOptionAnswer(optionsInput.map(o => o.answer));

    let transaction: Transaction;
    try {
        transaction = await sequelize.transaction()

        const q = await Question.create(inputQuestion as QuestionInput, { transaction })
        const options = await Promise.all(optionsInput.map(async o => await Option.create(o, { transaction })));
        await q.addOptions(options, { transaction });

        await q.setAnswer(options[answerIndex], { transaction });
        await q.setUser(await User.findByPk(inputQuestion.userId), { transaction });
        await q.setCategory(await QuestionCategory.findByPk(inputQuestion.questionCategoryId), { transaction });
        await transaction.commit();

        return questionDal.getById(q.id);
    } catch (error) {
        console.error(`rollback: ${transaction}`)
        await transaction.rollback();
        throw error;
    }
}


export const update = async (question: QuestionUpdate): Promise<QuestionServiceOutput> => {
    if (question.options) {
        question.options.forEach(option => {
            optionDal.update(option.id, option as OptionInput)
        })
    }
    return questionDal.update(question.id, question as QuestionInput)
}

export const getById = (id: number): Promise<Question> => {
    return questionDal.getById(id)
}

export const getAnswerById = async (id: number): Promise<Option> => {
    const question = await questionDal.getById(id, true);
    return question.answer;
}

export const deleteById = async (userId: number, questionId: number): Promise<boolean> => {
    const q = await questionDal.getById(questionId);
    if (q.user.id == userId)
        q.options.forEach(option => optionDal.deleteById(option.id));
    return questionDal.deleteById(questionId);
    throw Error("Forbiden action.");
}

export const findAll = async (): Promise<QuestionServiceOutput[]> => {
    return questionDal.findAll();
}

export const findAllCategories = async (): Promise<QuestionCategoryOutput[]> => {
    return questionDal.findAllCategories();
}