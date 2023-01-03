import express from "express";
import { home } from "../controllers/postingController.js";
import { signin, signup } from "../controllers/userControllers.js";

const rootRouter = express.Router();

rootRouter.all("/", home);
rootRouter.all("/sign-in", signin);
rootRouter.all("/sign-up", signup);

export default rootRouter;


