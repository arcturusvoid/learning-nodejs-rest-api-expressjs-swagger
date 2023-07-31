const express = require("express");

const app = express();

app.use("/test", (request, response) => {
  console.log("Received request");
  response.status(200).send("Success");
});

app.listen(3000, () => {
  console.log("Im ready to listen");
});
