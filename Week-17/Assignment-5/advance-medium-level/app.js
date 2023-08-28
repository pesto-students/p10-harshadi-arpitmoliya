const express = require("express");
const weatherRoutes = require("./routes/weather.routes");

const app = express();
app.use(express.json());

app.use(weatherRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
