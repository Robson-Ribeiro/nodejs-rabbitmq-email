import express from 'express';
import EmailController from '../controllers/emailController';
const router = express.Router();

router.post('/sender', EmailController.publish);

export default router;
