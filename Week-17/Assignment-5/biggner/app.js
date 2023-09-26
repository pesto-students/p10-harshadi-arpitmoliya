const express = require("express");
const bodyParser = require("body-parser");
const todosRoutes = require("./routes/todos.routes");

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

//Middleware to handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(3000, "localhost", () => {
  console.log("server is started on port no: 3000");
});
