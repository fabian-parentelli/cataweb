import UserRouter from "./users.router.js";
import ImageRouter from "./images.router.js";

export const userRouter = new UserRouter().getRouter();
export const imageRouter = new ImageRouter().getRouter();