import { Option, OptionUpdate } from "./Option";

/**
 * @example {
 * "prompt": "Isso é uma pergunta teste.",
 * "options": [
 *      {
 *		    "body": "Opção 1",
 *			"answer": true
 *		},
 *		{
 *		    "body": "Opção 2",
 *			"answer": false
 *		}
 *	],
 * "userId": 1,
 * "questionCategoryId": 1
 *}
 */
export interface Question {
    prompt: string,
    options: Option[]
    userId: number,
    questionCategoryId: number,
}

/**
 * @example {
 * "id": 1
 * "prompt": "Isso é uma pergunta teste.",
 * "options": [
 *      {
 *          "id": 2
 *		    "body": "Opção 1",
 *		},
 *	],
 * "answerId": 2
 * "questionCategoryId": 1
 *}
 */
export interface QuestionUpdate {
    id: number,
    prompt?: string,
    options?: OptionUpdate[]
    userId?: number,
    answerId?: number,
    questionCategoryId?: number,
}

/**
 * @example {
 * userId: 1,
 * questionId: 2,
 *}
 */
export interface QuestionDelete { userId: number, questionId: number }

/**
 * @example {
 * userId: 1,
 * questionId: 2,
 * optionId: 3,
 *}
 */
export interface Answer {
    userId: number,
    questionId: number,
    optionId: number
}