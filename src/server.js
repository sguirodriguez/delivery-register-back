const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const app = express();

require("./database");

app.use(express.json());
app.use(routes);
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.listen(process.env.PORT || 3333);
