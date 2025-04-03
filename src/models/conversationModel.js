import { pool } from "../config/db.js";

async function createConversationTable(){
    const query = `
        CREATE TABLE IF NOT EXISTS conversations (
        id SERIAL PRIMARY KEY,
        is_group BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`

    await pool.query(query);
    console.log("✅ Conversation table created!");
}


export {
    createConversationTable
}