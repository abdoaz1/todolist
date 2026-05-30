import express from 'express';
import {

} from '../controllers/tasks.controller.js';

const router = express.Router();

router.get('/test',(req,res)=>{
    res.status(200).send("gg");
});
export default router;