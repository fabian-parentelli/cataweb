import UserRepository from './user.repositories.js';
import ActivityRepository from './activity.repositories.js';
import ImageRepository from './image.repositories.js';

export const userRepository = new UserRepository();
export const activityRepository = new ActivityRepository();
export const imageRepository = new ImageRepository();