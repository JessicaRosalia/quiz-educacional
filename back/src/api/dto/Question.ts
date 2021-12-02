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
 *	]
 *}
 */
export interface Question {
    prompt: string,
    options: Option[]
}