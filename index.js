const express = require("express");
require("./src/db/connect");
const routes = require("./src/router/routes");  


const PORT = 'https://portfolio-backend-aj8i.onrender.com';
const app = express();
app.use(express.json());
app.use("/api/v1", routes);

app.listen(PORT || 3000);
