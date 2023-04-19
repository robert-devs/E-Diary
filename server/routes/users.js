import express from 'express';
import {
} from '../controllers/post.js';


import {signIn,signUp} from "../controllers/users.js"

const router = express.Router ();

router.post('/signIn',signIn)
router.post('/signUp',signUp)
export default router
