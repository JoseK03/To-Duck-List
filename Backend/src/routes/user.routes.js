import {Router} from 'express';
import { login, logout, profile, registerUser } from '../controllers/user.controller.js';
import { authtenticateUser } from '../middlewares/auth.middleware.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
const router = Router();

router.post('/register',validateSchema(registerSchema), registerUser);
router.post('/login',validateSchema(loginSchema),login);
router.post('/logout', logout);

// Rutas privadas que requiren autenticación.
router.get('/profile', authtenticateUser, profile);



export default router;