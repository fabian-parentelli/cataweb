import Router from './routes.js';
import * as userController from '../controllers/users.controller.js';
import { passportEnum } from '../config/enums.config.js';
import { multipleUploader } from '../config/multer.conf.js';
import { uploadToCloudinary } from '../config/cloudinary.config.js';

export default class UserRouter extends Router {
    init() {
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, userController.register);
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.login);
        this.get('/current', ['PUBLIC'], passportEnum.JWT, userController.current);
    };
}