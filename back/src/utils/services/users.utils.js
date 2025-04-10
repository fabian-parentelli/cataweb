import { userRepository, activityRepository } from "../../repositories/index.repositories.js";
import { UserNotFound } from "../custom-exceptions.utils.js";
import { isValidPassword } from "../hashedPassword.utils.js";
import { generateToken } from "../jwt.utils.js";

const verifyRole = async (password, userId, roles) => {
    const user = await userRepository.getForRole(userId);
    const comparePassword = isValidPassword(user, password);
    if (!comparePassword) throw new UserNotFound('La contraseña es incorrecta');
    if (!roles.includes(user.role)) throw new UserNotFound('No tienes permiso para realizar esta acción');
};

const userOrAdmin = async (result, activity, user, userDb) => {
    delete result.password;
    if (user._id.toString() === userDb._id.toString()) {
        await activityRepository.create({ eventId: result._id, userId: result._id, type: activity });
        const accesToken = generateToken(result);
        return { status: 'success', accesToken };
    } else {
        await activityRepository.create({ eventId: result._id, userId: 'admin', type: `${activity}_admin` });
        // await alertRepository.create({ eventId: result._id, userId: userDb._id, type: `${activity}_admin` });
        return { status: 'success', result };
    };
};

export { verifyRole, userOrAdmin };