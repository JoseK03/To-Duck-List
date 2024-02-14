import { Router } from "express";
import { authtenticateUser } from "../middlewares/auth.middleware.js";
import { deleteTask, getOneTask, getTask, postTask, updateTask } from "../controllers/task.controller.js";

const router = Router();

router.get('/getTask', authtenticateUser, getTask);
router.post('/postTask', authtenticateUser, postTask);
router.get('/getOneTask/:id', authtenticateUser, getOneTask);
router.delete('/deleteTask/:id', authtenticateUser, deleteTask);
router.put('/updateTask/:id', authtenticateUser, updateTask);

export default router