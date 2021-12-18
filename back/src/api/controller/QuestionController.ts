import * as QuestionService from '../../database/services/QuestionService'
import * as AnswerService from '../../database/services/AnswerService'
import { Answer, Question } from '../dto/Question'

import {
    Controller,
    Post,
    Route,
    Body,
    Get,
    Path,
    BodyProp,
} from "tsoa";

export const create = async (question: Question) => {
    return await QuestionService.create(question);
}


@Route("question")
export class QuestionController extends Controller {
    /**
     * Criar questão.
     * @returns Questão criada.
     */
    @Post()
    public async create(@Body() question: Question) {
        return QuestionService.create(question);
    }

    /**
     * Dados de uma questão.
     * @param questionId ID da questão
     * @returns Dados da questão.
     */
    @Get("{questionId}")
    public async get(@Path() questionId: number) {
        return QuestionService.getById(questionId);
    }

    /**
     * Dados de uma resposta de uma questão.
     * @param questionId ID da questão
     * @returns Dados da resposta a questão.
     */
    @Post("answer")
    public async answer(
        @Body() { questionId, userId, optionId }: Answer
    ) {
        let o = await QuestionService.getAnswerById(questionId);
        let answer = AnswerService.findOrCreate(userId, questionId, optionId, o.id == optionId);
        return answer;
    }
}
