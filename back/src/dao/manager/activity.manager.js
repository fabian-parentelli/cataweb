import { activityModel } from '../models/activity.model.js';

export default class Activity {

    create = async (user) => {
        return await activityModel.create(user);
    };
};