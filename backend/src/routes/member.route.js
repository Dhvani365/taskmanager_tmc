import express from "express";
import {getAllMembers} from '../controllers/member.controller.js'
const router = express.Router();

router.post('/getMembers',getAllMembers);

export default router