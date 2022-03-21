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
 *	"body": "Isso é opção teste",
 *	"answer": true
 *	}
 */
export interface OptionUpdate {
    id: number,
    body?: string,
    answer?: boolean
}