import { UserType } from "./User";

/**
 * @example {
 *  "email": "teste@email.com",
 *  "password": "123456"
 *}
 */
export interface UserLogin {
    email: string;
    password: string;
}

/**
 * @example {
 *  "name": "João Pedro",
 *  "cpf": "123456789-00",
 *  "email": "joaopedro@email.com",
 *  "phoneNumber": "8391231234",
 *  "schoolName": "Escola Maria de Fátima",
 *  "type": "student"
 * }
 */
export interface UserSignup {
    name: string,
    cpf: string,
    email: string,
    phoneNumber?: string,
    schoolName?: string,
    password: string,
    type: UserType,
}