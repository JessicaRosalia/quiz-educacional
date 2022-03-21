/**
 * @example {
 *	"body": "Isso é opção teste",
 *	"answer": true
 *	}
 */
export interface Option {
    body: string,
    answer: boolean
}

/**
 * @example {
 *  "id": 2
 *	"body": "Isso é opção teste",
 *	}
 */
export interface OptionUpdate {
    id: number,
    body?: string,
}