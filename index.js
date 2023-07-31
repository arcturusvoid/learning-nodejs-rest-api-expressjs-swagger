const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const usersRoute = require("./routes/users.route");
const postsRoute = require("./routes/posts.route");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

const swaggerOption = {
  swaggerDefinition: (swaggerJSDoc.Options = {
    info: {
      title: "my-posts",
      description: "API Documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/users", usersRoute);
app.use("/posts", postsRoute);

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
