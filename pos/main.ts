import pool from "../db";

export async function initiateDb() {
  return pool.query("CREATE TABLE BUN ID NOT EXISTS", (err, res) => {
    console.log(err, res);
    pool.end();
  });
}
