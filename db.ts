import { Client } from "pg";

const client = new Client({
  user: process.env.BUN_USERNAME,
  host: process.env.BUN_POS_HOST,
  database: process.env.BUN_DB_NAME,
  password: process.env.BUN_DB_PASSWORD,
  port: 5432,
});

export async function initiateDb() {
  await client.query("CREATE TABLE IF NOT EXISTS BUN", (err, res) => {
    console.log(err, res);
    client.end();
  });
}
