import * as QuestionService from '../../database/services/QuestionService'
import { Question } from '../dto/Question'

import {
    Controller,
    Post,
    Route,
    Body,
    Get,
    Path,
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
    @Get("answer/{questionId}")
    public async answer(@Path() questionId: number) {
        return QuestionService.getAnswerById(questionId);
    }
}
