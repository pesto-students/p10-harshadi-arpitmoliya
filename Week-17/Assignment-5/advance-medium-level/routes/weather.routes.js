const express = require("express");

const weatherController = require("../controller/weather-controller");

const router = express.Router();

router.get("/cities", weatherController.getWeatherDataOfCities);

router.get("/forecast", weatherController.getDaysForcasteDetails);

module.exports = router;
