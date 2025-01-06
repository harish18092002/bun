import figlet from "figlet";

console.log("Hello via Bun!");
const server = Bun.serve({
  port: 3000,
  async fetch(req: Request): Promise<Response> {
    const body = figlet.textSync("Bun!");
    const { method } = req;
    const { pathname } = new URL(req.url);
    if (method === "POST" && pathname === "/hello") {
      //   const sql = neon(process.env.JWT_DB_URL as string);
      console.debug(process.env.JWT_DB_URL);
      //   const rows = await sql`SELECT version()`;
      //   console.log(rows[0].version);

      return new Response("Hello, World!");
    }

    console.debug(method, pathname);
    return new Response("Failed outside condition");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
