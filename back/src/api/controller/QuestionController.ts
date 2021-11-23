import * as QuestionService from '../../database/services/QuestionService'
import { Question } from '../dto/Question'


export const create = async (question: Question) => {
    return await QuestionService.create(question);
}
