import express from 'express';
import authController from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/allUsers',authController.allUsersPage);

router.post('/register', authMiddleware.validateRegister, authController.register);

router.post('/login', authMiddleware.validateLogin, authController.login)

export default router;