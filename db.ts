import { Pool } from "pg";

const pool = new Pool({
  user: process.env.BUN_USERNAME,
  host: process.env.BUN_POS_HOST,
  database: process.env.BUN_DB_NAME,
  password: process.env.BUN_DB_PASSWORD,
  port: 5432,
});

export default pool;
