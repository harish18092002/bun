import { Client, Pool } from "pg";

const client = new Client({
  connectionString: process.env.JWT_DB_URL,
});

export async function initiateDb() {
  await client.connect();

  await client.query("CREATE TABLE BUN()").catch((err) => {
    console.error(err);
  });
  return "Table created!";
}

export async function closeDb() {
  await client.end();
  return "Connection closed!";
}
