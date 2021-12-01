import { Transaction } from 'sequelize/types'
import { Question } from '../models/Question'
import { QuestionInput, QuestionOuput } from '../models/Question'

export const create = async (questionInput: QuestionInput, transaction?: Transaction): Promise<Question> => {
    const question = await Question.create(questionInput, { transaction })
    return question
}

export const findOrCreate = async (questionInput: QuestionInput): Promise<Question> => {
    const [question] = await Question.findOrCreate({
        where: {
            id: questionInput.id
        },
        defaults: questionInput,
        include: [Question.associations.options]
    })

    return question
}

export const update = async (id: number, questionInput: Partial<QuestionInput>): Promise<Question> => {
    const question = await Question.findByPk(id)

    if (!question) {
        // @todo throw custom error
        throw new Error('questão não encontrada')
    }

    const updatedQuestion = await question.update(questionInput)
    return updatedQuestion
}

export const getById = async (id: number, answer?: boolean): Promise<Question> => {
    const include = [Question.associations.options]
    if (answer) include.push(Question.associations.answer);

    const question = await Question.findByPk(id, { include })

    if (!question) {
        // @todo throw custom error
        throw new Error('questão não encontrada')
    }

    return question
}


export const deleteById = async (id: number): Promise<boolean> => {
    const deletedQuestionCount = await Question.destroy({
        where: { id }
    })

    return !!deletedQuestionCount
}

