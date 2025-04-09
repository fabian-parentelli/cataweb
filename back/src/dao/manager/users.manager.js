import { userModel } from '../models/users.model.js';

export default class User {

    register = async (user) => {
        return await userModel.create(user);
    };

    getByEmail = async (email) => {
        return await userModel.findOne({ email }).lean();
    };

    exists = async (email) => {
        return await userModel.exists({ email }) !== null;
    };

    getById = async (id) => {
        return await userModel.findById(id).lean();
    };
};