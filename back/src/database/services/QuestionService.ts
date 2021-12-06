
import { Transaction } from 'sequelize/types'
import * as questionDal from '../dal/question'
import { sequelize } from '../models'
import { Option, OptionInput, OptionOutput } from '../models/Option'
import { Question, QuestionInput, QuestionOuput } from '../models/Question'

interface QuestionServiceInput extends QuestionInput {
    options: (OptionInput & { answer: boolean })[]
}

interface QuestionServiceOutput extends QuestionOuput {
    options?: OptionOutput[],
}

export const create = async (payload: QuestionServiceInput): Promise<QuestionServiceOutput> => {
    const { options: optionsInput, ...inputQuestion } = payload

    let numOfAnswers = 0;
    let answerIndex = -1;

    optionsInput.forEach((option, index) => {
        numOfAnswers += option.answer ? 1 : 0
        if (option.answer) answerIndex = index
    })

    if (numOfAnswers > 1) {
        throw new Error("várias respostas fornecidas");
    }
    if (numOfAnswers === 0) {
        throw new Error("nenhuma resposta fornecida");
    }


    let transaction: Transaction;
    try {
        transaction = await sequelize.transaction()

        const q = await Question.create(inputQuestion as QuestionInput, { transaction })
        const options = await Promise.all(optionsInput.map(async o => await Option.create(o, { transaction })));
        await q.addOptions(options, { transaction });

        await q.setAnswer(options[answerIndex], { transaction });
        await transaction.commit();

        return questionDal.getById(q.id);
    } catch (error) {
        console.log(`rollback: ${transaction}`)
        await transaction.rollback();
        throw error;
    }


}

export const update = async (id: number, payload: Partial<QuestionServiceInput>): Promise<QuestionServiceOutput> => {
    const { options, ...inputQuestion } = payload
    return questionDal.update(id, inputQuestion as QuestionInput)
}

export const getById = (id: number): Promise<Question> => {
    return questionDal.getById(id)
}

export const getAnswerById = async (id: number): Promise<Option> => {
    const question = await questionDal.getById(id, true);
    return question.answer;
}

export const deleteById = (id: number): Promise<boolean> => {
    return questionDal.deleteById(id)
}