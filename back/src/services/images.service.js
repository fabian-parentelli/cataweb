import { deleteImg, getPublicId } from "../config/cloudinary.config.js";
import { activityRepository, imageRepository } from "../repositories/index.repositories.js";
import { ImageNotFound } from '../utils/custom-exceptions.utils.js';
import { verifyRole } from "../utils/services/users.utils.js";

const postAvatar = async (body, imgUrl) => {
    body.url = imgUrl[0];
    const result = await imageRepository.postAvatar(body);
    if (!result) throw new ImageNotFound('No se puede guardar el avatar');
    await activityRepository.create({ eventId: result._id, userId: 'master', type: 'newAvatar' });
    return { status: 'success', result };
};

const getAvatars = async ({ page = 1, active, name, id, selected }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (name) query.name = { $regex: name, $option: "i" };
    if (id) query._id = id;
    let result;
    if (selected) result = await imageRepository.getAllAvatars(query);
    else result = await imageRepository.getAvatars(query, page);
    if (!result) throw new ImageNotFound('Error al obtener las imágenes');
    return { status: 'success', result };
};

const updAvatarAct = async ({ id }) => {
    const result = await imageRepository.updAvatarAct(id);
    if (!result) throw new ImageNotFound('Error al actualizar el estado activo');
    await activityRepository.create({ eventId: id, userId: 'master', type: 'updActiveAvatar' });
    return { status: 'success', result };
};

const deleteAvatar = async (body, { user }) => {
    await verifyRole(body.password, user._id, ['master']);
    const avatar = await imageRepository.getAvatarById(body.data);
    if (!avatar) throw new ImageNotFound('Error al obtener el avatar');
    const imgId = getPublicId(avatar.url);
    if (imgId) deleteImg(imgId);
    const result = await imageRepository.deleteAvatar(avatar._id)
    if (!result) throw new ImageNotFound('Error al eliminar el avatar');
    return { status: 'success' };
};

export { postAvatar, getAvatars, updAvatarAct, deleteAvatar };