import express from "express";
import { home } from "../controllers/postingController.js";
import { signin, signup, signout } from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.all("/", home);
rootRouter.all("/sign-in", signin);
rootRouter.all("/sign-up", signup);
rootRouter.all("/sign-out", signout);

export default rootRouter;


