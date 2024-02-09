import {Router} from 'express';
import { login, logout, profile, registerUser } from '../controllers/user.controller.js';
import { authtenticateUser } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/register', registerUser);
router.post('/login', login);
router.post('/logout', logout);

// Rutas privadas que requiren autenticación.
router.get('/profile', authtenticateUser, profile);



export default router;