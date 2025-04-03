import express from 'express';
import { pool } from './config/db.js';
import { redisConnection } from './config/redis.js';

const app = express();
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Chat-app is running on server ${PORT}`);
})