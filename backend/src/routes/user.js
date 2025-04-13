import express from 'express';
import { getAllUsers, createUser } from '../controllers/userController.js';

const router = express.Router();

// 取得所有使用者
router.get('/', getAllUsers);

// 新增使用者
router.post('/', createUser);

export default router;
