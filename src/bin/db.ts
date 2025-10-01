import pgPromise from "pg-promise";
import dotenv from "dotenv";
dotenv.config();
const pgp = pgPromise(/* options */);
const password = process.env.DB_PASSWORD;

const db = pgp(`postgres://postgres:${password}@localhost:5432/server2`);

/**
 DB Connection
 */

const connection = async () => {
  try {
    await db.one("SELECT 1");
    console.log("Database connection established");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

connection();

export default db;
