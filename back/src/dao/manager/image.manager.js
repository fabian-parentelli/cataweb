import { avatarModel } from '../models/avatars.model.js';

export default class Image {

    // Avatars
    postAvatar = async (avatar) => {
        return await avatarModel.create(avatar);
    };

    getAvatars = async (query, page) => {
        return await avatarModel.paginate(query, { page, limit: 6, lean: true });
    };

    getAllAvatars = async (query) => {
        return await avatarModel.find(query).lean();
    };

    updAvatarAct = async (id) => {
        return await avatarModel.updateOne({ _id: id }, [{ $set: { active: { $not: "$active" } } }]);
    };

    getAvatarById = async (id) => {
        return await avatarModel.findById(id).lean();
    };

    deleteAvatar = async (_id) => {
        return await avatarModel.deleteOne({ _id })
    };

};