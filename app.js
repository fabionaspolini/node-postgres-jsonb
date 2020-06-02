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

app.get("/:cpf?", async (req, res) => {
  const cpf = req.params.cpf;
  const db = await require("./db");

  let pessoas;
  if (cpf) {
    pessoas = await db.pessoa.findDoc({cpf: cpf});
  } else {
    //pessoas = await db.pessoa.findDoc({id: 6});
    //pessoas = await db.pessoa.findDoc(6);
    pessoas = await db.pessoa.findDoc(undefined);
  }
  //.map(e => e.body)
  // const result = pessoas;
  const result = pessoas;
  res.json(result);
})

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
