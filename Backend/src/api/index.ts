import express from 'express';

const router = express.Router();

import userRouter from './users/users.router.js';

router.use('/users', userRouter);