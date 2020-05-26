const massive = require("massive");

const db = massive({
  host: "127.0.0.1",
  port: 5432,
  database: "teste",
  user: "postgres",
  password: "123456",
});

module.exports = db;