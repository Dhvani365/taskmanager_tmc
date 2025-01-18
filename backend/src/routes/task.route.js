import express from "express";
import {getTask} from '../controllers/task.controller.js'
const router = express.Router();

router.post('/getTask',getTask);

export default router