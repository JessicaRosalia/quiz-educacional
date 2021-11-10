export interface UserLogin {
    email: string;
    password: string;
}

export interface UserSignup {
    name: string,
    cpf: string,
    email: string,
    phoneNumber?: string,
    schoolName?: string,
    password: string
}