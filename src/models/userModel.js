import { pool } from "../config/db.js";

async function createUserTable(){
    const query = `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`

    await pool.query(query);
    console.log("✅ Users table created!");
}

export {
    createUserTable
}