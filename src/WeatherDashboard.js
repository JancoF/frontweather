import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/weatherforecast')
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }, []);

  return (
    <div className="container bg-dark text-light" style={{backgroundColor: '#253646', borderRadius: '10px', padding: '20px', marginTop: '20px'}}>
      <h1 className="text-center mb-4">Weather Forecast</h1>
      <div className="row">
        {weatherData.map((weather, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card" style={{backgroundColor: '#29293d', color: 'white'}}>
              <div className="card-body">
                <h5 className="card-title">{new Date(weather.date).toDateString()}</h5>
                <p className="card-tex text-sucess">Temperature: {weather.temperatureC}°C / {weather.temperatureF}°F</p>
                <p className="card-text">Summary: {weather.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDashboard;
