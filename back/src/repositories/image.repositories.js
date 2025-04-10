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
   
    getAllAvatars = async (query) => {
        const result = await imageManager.getAllAvatars(query);
        return result;
    };
    
    updAvatarAct = async (id) => {
        const result = await imageManager.updAvatarAct(id);
        return result;
    };
    
    getAvatarById = async (id) => {
        const result = await imageManager.getAvatarById(id);
        return result;
    };
    
    deleteAvatar = async (id) => {
        const result = await imageManager.deleteAvatar(id);
        return result;
    };
    
};