export type UserType = "professor" | "student"

export interface User {
    id: number,
    name: string,
    cpf: string,
    email: string,
    phoneNumber?: string,
    schoolName?: string,
    type: UserType
}