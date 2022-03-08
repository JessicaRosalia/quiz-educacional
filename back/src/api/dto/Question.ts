import { Option } from "./Option";

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