
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://muskansaini1804:8QMFqcwm3YB7b97A@cluster0.f4dzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  )
  .then(() => {
    console.log("connection successfully.....");
  })
  .catch((err) => {
    console.log("connection Failed.....", err);
  });
