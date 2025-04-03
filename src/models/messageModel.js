import {pool} from "../config/db.js";

async function createMessagesTable(){
  const query = `
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
      sender_id INT REFERENCES users(id) ON DELETE CASCADE,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log("✅ Messages table created!");
}

export {
    createMessagesTable
}
