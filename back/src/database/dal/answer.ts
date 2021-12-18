import { Answer } from '../models/Answer'
import { AnswerInput, AnswerOutput } from '../models/Answer'

export const create = async (userId: number, questionId: number, optionId: number, correct: boolean): Promise<AnswerOutput> => {
    const answer = await Answer.create({ userId, questionId, optionId, correct });
    return answer
}

export const findOrCreate = async (userId: number, questionId: number, optionId: number, correct: boolean): Promise<AnswerOutput> => {
    const [answer] = await Answer.findOrCreate({
        where: {
            userId,
            questionId
        },
        defaults: { userId, questionId, optionId, correct }
    })

    return answer
}

export const getByUserIdAndquestionId = async (userId: number, questionId: number): Promise<AnswerOutput> => {
    const answer = await Answer.findOne({
        where: { userId, questionId }
    })

    if (!answer) {
        // @todo throw custom error
        throw new Error('resposta não encontrada')
    }

    return answer
}

