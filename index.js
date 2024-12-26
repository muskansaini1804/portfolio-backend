const express = require("express");
require("./src/db/connect");
const routes = require("./src/router/routes");  // Importing routes from router


const PORT = 3000;
const app = express();
app.use(express.json());
app.use("/api/v1", routes);

app.listen(PORT || 3000);
