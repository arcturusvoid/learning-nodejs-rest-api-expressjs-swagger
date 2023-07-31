const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const usersRoute = require("./routes/users.route")

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use("/users", usersRoute)

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
