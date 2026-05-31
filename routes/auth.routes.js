import express from 'express';
import { login, register} from '../controllers/auth.controller.js';
import { validateRegister, validateLogin, handleValidation } from '../middleware/auth.middleware.js'

const router = express.Router();

router.post('/register', validateRegister, handleValidation, register);

router.post('/login', validateLogin, handleValidation, login)


export default router;