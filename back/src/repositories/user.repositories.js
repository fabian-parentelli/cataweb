import { userManager } from '../dao/manager/index.manager.js';

export default class UserRepository {

    register = async (user) => {
        const result = await userManager.register(user);
        return result;
    };

    getByEmail = async (email) => {
        const result = await userManager.getByEmail(email);
        return result;
    };

    exists = async (email) => {
        const result = await userManager.exists(email);
        return result;
    };

    getById = async (id) => {
        const result = await userManager.getById(id);
        return result;
    };
};