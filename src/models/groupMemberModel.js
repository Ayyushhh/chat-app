import {pool} from "../config/db.js";

async function createGroupMembersTable(){
  const query = `
    CREATE TABLE IF NOT EXISTS group_members (
      id SERIAL PRIMARY KEY,
      conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  await pool.query(query);
  console.log("✅ Group Members table created!");
}

export {
    createGroupMembersTable
}
