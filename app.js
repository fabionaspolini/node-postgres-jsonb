const express = require("express");
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/", async (req, res) => {
  const db = await require("./db");
  const pessoa = await db.saveDoc("pessoa", req.body);
  res.json({ status: "OK" });
});

app.get("/", async (req, res) => {
  const db = await require("./db");
  const pessoas = await db.pessoa.find();
  // const result = pessoas;
  const result = pessoas.map(e => e.body);
  res.json(result);
})

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
