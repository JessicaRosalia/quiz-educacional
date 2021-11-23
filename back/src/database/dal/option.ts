import { Option } from '../models/Option'
import { OptionInput, OptionOutput } from '../models/Option'

export const create = async (optionInput: OptionInput): Promise<OptionOutput> => {
    const option = await Option.create(optionInput)
    return option
}

export const findOrCreate = async (optionInput: OptionInput): Promise<OptionOutput> => {
    const [option] = await Option.findOrCreate({
        where: {
            id: optionInput.id
        },
        defaults: optionInput
    })

    return option
}

export const update = async (id: number, optionInput: Partial<OptionInput>): Promise<OptionOutput> => {
    const option = await Option.findByPk(id)

    if (!option) {
        // @todo throw custom error
        throw new Error('not found')
    }

    const updatedOption = await option.update(optionInput)
    return updatedOption
}

export const getById = async (id: number): Promise<OptionOutput> => {
    const option = await Option.findByPk(id)

    if (!option) {
        // @todo throw custom error
        throw new Error('not found')
    }

    return option
}


export const deleteById = async (id: number): Promise<boolean> => {
    const deletedOptionCount = await Option.destroy({
        where: { id }
    })

    return !!deletedOptionCount
}

