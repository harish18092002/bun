import { Pool } from "pg";

const pool = new Pool({
  user: "yourUsername",
  host: "localhost",
  database: "yourDatabase",
  password: "yourPassword",
  port: 5432,
});

export default pool;
