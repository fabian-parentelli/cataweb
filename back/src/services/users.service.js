import { userRepository, activityRepository } from "../repositories/index.repositories.js";
import { UserNotFound } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { registerSuccess } from '../utils/html/registerSuccess.utils.js';
import { sendEmail } from './email.service.js';
import { generateToken, passwordToken } from '../utils/jwt.utils.js';
import { v4 as uuidv4 } from 'uuid';
import config from '../config/dotEnv.config.js';
import { recoverPassword_HTML } from '../utils/html/recoverPassword.utils.js';

const register = async (user) => {
    const isUser = await userRepository.exists(user.email);
    if (isUser) throw new UserNotFound('Ya existe un usuario con este email');
    user.password = createHash(user.password);
    const result = await userRepository.register(user);
    if (!result) throw new UserNotFound('No se puede registrar al usuario');
    const emailTo = {
        to: user.email,
        subject: 'Registro exitoso',
        html: await registerSuccess(result)
    };
    await sendEmail(emailTo);
    await activityRepository.create({ eventId: result._id, userId: result._id, type: 'register' });
    delete result.password;
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const login = async (user) => {
    const isUser = await userRepository.getByEmail(user.email);
    if (!isUser) throw new UserNotFound('Email no válido');
    const comparePassword = isValidPassword(isUser, user.password);
    if (!comparePassword) throw new UserNotFound('La contraseña es incorrecta');
    if (!isUser.active) throw new UserNotFound('Error de permisos, comunícate con nosotros');
    await activityRepository.create({ eventId: isUser._id, userId: isUser._id, type: 'login' });
    delete isUser.password;
    const accesToken = generateToken(isUser);
    return { status: 'success', accesToken };
};

const current = async ({ user }) => {
    const userDb = await userRepository.getById(user._id);
    if (!userDb) throw new UserNotFound('No se encuentra el usuario en la base de datos');
    delete userDb.password;
    return userDb;
};

export { register, login, current };