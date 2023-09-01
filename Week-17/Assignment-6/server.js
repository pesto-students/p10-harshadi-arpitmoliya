const express = require("express");
const assetRoutes = require("./app/routes/assets.routes");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(assetRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
