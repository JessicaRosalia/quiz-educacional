import * as UserService from '../../database/services/UserService'
import { User } from '../dto/User';


export const me = async (userId: number) => {
    const user = await UserService.getById(userId);
    return user;
}
