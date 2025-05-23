import * as imageService from '../services/images.service.js';
import { ImageNotFound } from '../utils/custom-exceptions.utils.js';

const postAvatar = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imageService.postAvatar({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAvatars = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imageService.getAvatars({ ...req.query });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updAvatarAct = async (req, res) => {
    try {
        const result = await imageService.updAvatarAct({ ...req.params });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteAvatar = async (req, res) => {
    try {
        const result = await imageService.deleteAvatar({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImageNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { postAvatar, getAvatars, updAvatarAct, deleteAvatar };