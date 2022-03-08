
import * as userDal from '../dal/user'
import { UserInput, UserOutput } from '../models/User'

export const create = async (payload: UserInput): Promise<UserOutput> => {

    return userDal.create(payload)
}

export const update = async (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {

    return userDal.update(id, payload)
}

export const getById = (id: number): Promise<UserOutput> => {
    return userDal.getById(id)
}

export const getByEmail = (email: string): Promise<UserOutput> => {
    return userDal.getByEmail(email)
}

export const deleteById = (id: number): Promise<boolean> => {
    return userDal.deleteById(id)
}

export const exists = (id: number): Promise<boolean> => {
    return userDal.exists(id)
}