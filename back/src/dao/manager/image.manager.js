import { avatarModel } from '../models/avatars.model.js';

export default class Image {

    // Avatars
    postAvatar = async (avatar) => {
        return await avatarModel.create(avatar);
    };

    getAvatars = async (query, page) => {
        return await avatarModel.paginate(query, { page, limit: 6, lean: true });
    };
};