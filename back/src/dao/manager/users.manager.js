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

    getForRole = async (_id) => {
        return await userModel.findOne({ _id }, { password: 1, role: 1 });
    };

    update = async (user) => {
        return await userModel.findByIdAndUpdate(user._id, user, { lean: true, new: true });
    };

};