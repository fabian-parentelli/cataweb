import { activityRepository, imageRepository } from "../repositories/index.repositories.js";
import { ImageNotFound } from '../utils/custom-exceptions.utils.js';

const postAvatar = async (body, imgUrl) => {
    body.url = imgUrl[0];
    const result = await imageRepository.postAvatar(body);
    if (!result) throw new ImageNotFound('No se puede guardar el avatar');
    await activityRepository.create({ eventId: result._id, userId: 'master', type: 'newAvatar' });
    return { status: 'success', result };
};

const getAvatars = async ({ page = 1, active, name, id }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (name) query.name = { $regex: name, $option: "i" };
    if (id) query._id = id;
    const result = await imageRepository.getAvatars(query, page);
    if (!result) throw new ImageNotFound('Error al obtener las imágenes');
    return { status: 'success', result };
};

export { postAvatar, getAvatars };