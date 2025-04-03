import express from 'express';
import { pool } from './config/db.js';
import { redisConnection } from './config/redis.js';
import "./migrations/setupDB.js";

const app = express();
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Chat-app is running on server ${PORT}`);
})