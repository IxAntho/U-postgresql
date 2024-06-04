import Client from "pg";

const db = new Client({
  user: "postgres",
  host: "localhost",
  database: "U-postgres",
  password: "DulSop.2804",
  port: 5432,
});

db.connect();

db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }

  db.end();
});
