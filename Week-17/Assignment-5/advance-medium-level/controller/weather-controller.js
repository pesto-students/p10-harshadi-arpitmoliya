const axios = require("axios");

// const API_KEY = "da6ca1cb976f4eee958122514232808";
// const WEATHERAPI_BASE_URL = "http://api.weatherapi.com/v1";

async function getWeatherDataOfCities(req, res) {
  try {
    const { cities } = req.query;

    if (!cities || !Array.isArray(cities)) {
      return res.status(400).json({ error: "Invalid cities parameter." });
    }

    const cityWeatherDataPromises = cities.map(async (city) => {
      try {
        const response = await axios.get(
          `${WEATHERAPI_BASE_URL}/current.json`,
          {
            params: {
              key: API_KEY,
              q: `city:${city}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        console.error("Error fetching weather data for", city, error.message);
        return null;
      }
    });

    const cityWheatherData = await Promise.all(cityWeatherDataPromises);
    res.json(cityWheatherData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
}

async function getDaysForcasteDetails(req, res) {
  try {
    const { city, days } = req.query;

    const response = await axios.get(`${WEATHERAPI_BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days,
      },
    });

    const forecastData = response.data.forecast.forecastday;

    res.json(forecastData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
}

module.exports = {
  getWeatherDataOfCities: getWeatherDataOfCities,
  getDaysForcasteDetails: getDaysForcasteDetails,
};
