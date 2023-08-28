const express = require("express");
const weatherRoutes = require("./routes/weather.routes");

const app = express();
app.use(express.json());

const API_KEY = "bec04617b1be4d018f9101810232808";
const API_URL = "http://api.weatherapi.com/v1";

app.use(weatherRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
