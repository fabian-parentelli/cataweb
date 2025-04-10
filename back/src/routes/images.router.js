import Router from './routes.js';
import * as imageController from '../controllers/images.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class ImageRouter extends Router {
    init() {
        this.post('/avatar', ['MASTER'], passportEnum.JWT, multipleUploader, uploadToCloudinary, imageController.postAvatar);
        this.get('/avatar', ['PUBLIC'], passportEnum.NOTHING, imageController.getAvatars);
        this.put('/avatar/:id', ['MASTER'], passportEnum.JWT, imageController.updAvatarAct);
        this.delete('/avatar', ['MASTER'], passportEnum.JWT, imageController.deleteAvatar);
    };
};