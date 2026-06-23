import React, { useState } from "react";
import "./App.css";
import WeatherDashboard from "./WeatherDashboard";


const cities = {
  Singapore: {
    latitude: 1.3521,
    longitude: 103.8198,
  },
  Tokyo: {
    latitude: 35.6762,
    longitude: 139.6503,
  },
  London: {
    latitude: 51.5072,
    longitude: -0.1276,
  },
  NewYork: {
    latitude: 40.7128,
    longitude: -74.006,
  },
  Sydney: {
    latitude: -33.8688,
    longitude: 151.2093,
  },
  Bangkok: {
    latitude: 13.7563,
    longitude: 100.5018,
  },
};

export default function WeatherData() {
  const [city, setCity] = useState("Singapore");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);

    const { latitude, longitude } = cities[city];

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m`
      );

      const data = await response.json();
      setWeather(data.current);
    } catch (error) {
      console.error("Weather fetch error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="weather-container">
      <h2>Weather Information Dashboard</h2>

      <div className="selection-panel">
        <label>
          <strong>City :</strong>
        </label>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {Object.keys(cities).map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>

        <button onClick={getWeather}>
          Submit
        </button>
      </div>

      {loading && <p>Loading weather data...</p>}

      {weather && (
        <div className="weather-card">

          <h3>{city}</h3>

          <div className="weather-grid">

            <div className="weather-item">
              <span>Temperature</span>
              <p>{weather.temperature_2m} °C</p>
            </div>

            <div className="weather-item">
              <span>Feels Like</span>
              <p>{weather.apparent_temperature} °C</p>
            </div>

            <div className="weather-item">
              <span>Humidity</span>
              <p>{weather.relative_humidity_2m} %</p>
            </div>

            <div className="weather-item">
              <span>Day/Night</span>
              <p>{weather.is_day ? "Day" : "Night"}</p>
            </div>

            <div className="weather-item">
              <span>Precipitation</span>
              <p>{weather.precipitation} mm</p>
            </div>

            <div className="weather-item">
              <span>Rain</span>
              <p>{weather.rain} mm</p>
            </div>

            <div className="weather-item">
              <span>Showers</span>
              <p>{weather.showers} mm</p>
            </div>

            <div className="weather-item">
              <span>Snowfall</span>
              <p>{weather.snowfall} mm</p>
            </div>

            <div className="weather-item">
              <span>Weather Code</span>
              <p>{weather.weather_code}</p>
            </div>

            <div className="weather-item">
              <span>Cloud Cover</span>
              <p>{weather.cloud_cover} %</p>
            </div>

            <div className="weather-item">
              <span>MSL Pressure</span>
              <p>{weather.pressure_msl} hPa</p>
            </div>

            <div className="weather-item">
              <span>Surface Pressure</span>
              <p>{weather.surface_pressure} hPa</p>
            </div>

            <div className="weather-item">
              <span>Wind Speed</span>
              <p>{weather.wind_speed_10m} km/h</p>
            </div>

            <div className="weather-item">
              <span>Wind Direction</span>
              <p>{weather.wind_direction_10m}°</p>
            </div>

            <div className="weather-item">
              <span>Wind Gust</span>
              <p>{weather.wind_gusts_10m} km/h</p>
            </div>

            <div className="weather-item">
              <span>Time Updated</span>
              <p>{weather.time}</p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}