const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./models");

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync().then(() => {
  console.log("deu certo a conexao");
});
app.listen(3333);
