import { Router } from "express";
import { authtenticateUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/task', authtenticateUser);

export default router