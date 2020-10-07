import React, { useState, useEffect } from "react";

export const WeatherDisplay = (props) => {
  const { id } = props;
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${id}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        setWeatherData(json);
      })
      .catch(() => {
        alert('Что-то пошло не так...');
        setWeatherData(null);
      });
  }

  if(!weatherData) {
    return <div>Loading....</div>
  }

  const iconUrl = `http://openweathermap.org/img/w/${weatherData ? weatherData.weather[0].icon : '1Ba'}.png`;

  return (
    <div>
      <h1>
        {`${weatherData.weather[0].main} in ${weatherData.name}`}
        <img src={iconUrl} alt={weatherData.description} />
      </h1>
      <p>Current: {weatherData && weatherData.main ? weatherData.main.temp : '--'}°</p>
      <p>High: {weatherData && weatherData.main ? weatherData.main.temp_max : '--'}°</p>
      <p>Low: {weatherData && weatherData.main ? weatherData.main.temp_min : '--'}°</p>
      <p>Wind Speed: {weatherData && weatherData.wind ? weatherData.wind.speed : '--'} m/sec</p>
    </div>
  );
}
