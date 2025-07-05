import express from 'express';
import { signUp,login} from '../Controller/UserController.js';

const router = express.Router();

// Auth Routes
router.post('/signup', signUp);
router.post("/login",login)




export default router;
