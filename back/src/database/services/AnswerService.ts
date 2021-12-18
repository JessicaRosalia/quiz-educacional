
import * as answerDal from '../dal/answer'

export const create = async (userId: number, questionId: number, optionId: number, correct: boolean) => {
    return answerDal.create(userId, questionId, optionId, correct);
}

export const findOrCreate = async (userId: number, questionId: number, optionId: number, correct: boolean) => {
    return answerDal.findOrCreate(userId, questionId, optionId, correct);
}

export const getByUserIdAndquestionId = async (userId: number, questionId: number) => {
    return answerDal.getByUserIdAndquestionId(userId, questionId);
}

