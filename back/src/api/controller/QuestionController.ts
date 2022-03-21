import * as QuestionService from '../../database/services/QuestionService'
import * as AnswerService from '../../database/services/AnswerService'
import { Answer, Question, QuestionDelete, QuestionUpdate } from '../dto/Question'
import {
    Controller,
    Post,
    Route,
    Body,
    Get,
    Path,
    Security,
    Patch,
    Delete,
} from "tsoa";
import { allScopes, professorScope } from '../../utils';

export const create = async (question: Question) => {
    return await QuestionService.create(question);
}


@Route("question")
export class QuestionController extends Controller {

    /**
     * Lista de questões.
     * @param questionId ID da questão
     * @returns Dados da questão.
     */
    @Security("jwt", professorScope)
    @Get()
    public async getQuestions() {
        return QuestionService.findAll();
    }

    /**
     * Criar questão.
     * @returns Questão criada.
     */
    @Security("jwt", professorScope)
    @Post()
    public async create(@Body() question: Question) {
        return QuestionService.create(question);
    }

    /**
     * Atualizar questão.
     * @returns Questão criada.
     */
    @Security("jwt", professorScope)
    @Patch()
    public async update(@Body() question: QuestionUpdate) {
        return QuestionService.update(question);
    }

    /**
     * Deletar questão.
     * @returns Questão criada.
     */
    @Security("jwt", professorScope)
    @Delete()
    public async delete(@Body() question: QuestionDelete) {
        return QuestionService.deleteById(question.userId, question.questionId);
    }

    /**
     * Lista de categorias de questões
     * @param questionId ID da questão
     * @returns Dados da questão. 
     */
    @Security("jwt", allScopes)
    @Get("categories")
    public async categories() {
        return await QuestionService.findAllCategories();
    }

    /**
     * Dados de uma resposta de uma questão.
     * @param questionId ID da questão
     * @returns Dados da resposta a questão.
     */
    @Security("jwt", allScopes)
    @Post("answer")
    public async answer(
        @Body() { questionId, userId, optionId }: Answer
    ) {
        let o = await QuestionService.getAnswerById(questionId);
        const correct = o.id == optionId;
        await AnswerService.findOrCreate(userId, questionId, optionId, correct);
        return { correct, correctOptionId: o.id };
    }

    /**
     * Dados de uma questão.
     * @param questionId ID da questão
     * @returns Dados da questão. 
     */
    @Security("jwt", allScopes)
    @Get("{questionId}")
    public async getQuestion(@Path() questionId: number) {
        return QuestionService.getById(questionId);
    }
}
