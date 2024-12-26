const express = require("express");
require("./db/connect");
const routes = require("../src/router/routes");


const PORT = 3000;
const app = express();
app.use(express.json());
app.use("/api/v1", routes);

app.listen(PORT || 3000);
