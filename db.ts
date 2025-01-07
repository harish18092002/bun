import { Client, Pool } from "pg";

const client = new Client({
  user: process.env.BUN_USERNAME,
  host: process.env.BUN_POS_HOST,
  database: process.env.BUN_DB_NAME,
  password: process.env.BUN_DB_PASSWORD,
  port: 5432,
});

export async function initiateDb() {
  await client.connect();

  await client.query("CREATE TABLE BUN()").catch((err) => {
    console.error(err);
  });
  await closeDb();
  return "Table created!";
}

export async function closeDb() {
  await client.end();
  return "Connection closed!";
}
