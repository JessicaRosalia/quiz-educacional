export type UserType = "professor" | "student"

/**
 * @example {
 *  "id": 1,
 *  "name": "João Pedro",
 *  "cpf": "123456789-00",
 *  "email": "joaopedro@email.com",
 *  "phoneNumber": "8391231234",
 *  "schoolName": "Escola Maria de Fátima",
 *  "type": "student"
 * }
 */
export interface User {
    id: number,
    name: string,
    cpf: string,
    email: string,
    phoneNumber?: string,
    schoolName?: string,
    type: UserType
}