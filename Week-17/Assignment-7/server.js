const express = require("express");
const cors = require("cors");
const assetRoutes = require("./app/routes/assets.routes");
const userRoutes = require("./app/routes/users.routes");
const connectDB = require("./app/database/db");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(assetRoutes);
app.use(userRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
