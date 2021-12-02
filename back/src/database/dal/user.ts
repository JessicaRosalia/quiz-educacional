import { User } from '../models/User'
import { UserInput, UserOuput } from '../models/User'

export const create = async (userInput: UserInput): Promise<UserOuput> => {
    const createdUser = await User.findOne({
        where: {
            email: userInput.email
        }
    })

    if (createdUser) {
        throw new Error('usuário já existe');
    }

    const user = await User.create(userInput)

    return user
}

export const findOrCreate = async (userInput: UserInput): Promise<UserOuput> => {
    const [user] = await User.findOrCreate({
        where: {
            id: userInput.id
        },
        defaults: userInput
    })

    return user
}

export const update = async (id: number, userInput: Partial<UserInput>): Promise<UserOuput> => {
    const user = await User.findByPk(id)

    if (!user) {
        // @todo throw custom error
        throw new Error('usuário não encontrado')
    }

    const updatedUser = await user.update(userInput)
    return updatedUser
}

export const getById = async (id: number): Promise<UserOuput> => {
    const user = await User.findByPk(id)

    if (!user) {
        // @todo throw custom error
        throw new Error('usuário não encontrado')
    }

    return user
}

export const getByEmail = async (email: string): Promise<UserOuput> => {
    const user = await User.findOne({
        where: {
            email
        }
    })

    if (!user) {
        // @todo throw custom error
        throw new Error('usuário não encontrado')
    }

    return user
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedUserCount = await User.destroy({
        where: { id }
    })

    return !!deletedUserCount
}

