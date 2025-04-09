import { imageManager } from '../dao/manager/index.manager.js';

export default class ImageRepository {

    postAvatar = async (avatar) => {
        const result = await imageManager.postAvatar(avatar);
        return result;
    };

    getAvatars = async (query, page) => {
        const result = await imageManager.getAvatars(query, page);
        return result;
    };
    
};