import { pool } from "../config/db.js";

const createTables = async () => {
    try {
        // Users Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Conversations Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS conversations (
                id SERIAL PRIMARY KEY,
                user1_id INT REFERENCES users(id),
                user2_id INT REFERENCES users(id),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Messages Table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS messages (
                id SERIAL PRIMARY KEY,
                conversation_id INT REFERENCES conversations(id),
                sender_id INT REFERENCES users(id),
                message TEXT NOT NULL,
                sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        await pool.query(`
    CREATE TABLE IF NOT EXISTS group_members (
      id SERIAL PRIMARY KEY,
      conversation_id INT REFERENCES conversations(id) ON DELETE CASCADE,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

        console.log("✅ Database tables created successfully!");
    } catch (err) {
        console.error("❌ Error running migration:", err);
    } finally {
        pool.end(); // Close DB connection
    }
};

// Run the migration
createTables();