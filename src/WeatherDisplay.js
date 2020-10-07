import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent } from "@material-ui/core";

export const WeatherDisplay = (props) => {
  const { id, img } = props;
  const URL = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric`;

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(json => {
        setWeatherData(json);
      })
      .catch(() => {
        alert('Что-то пошло не так...');
        setWeatherData(null);
      });
  }, []);

  if (!weatherData) return <div>Loading...</div>;

  const weather =  weatherData.weather[0];
  const iconUrl = `http://openweathermap.org/img/w/${weather.icon}.png`;

  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="City"
            height="140"
            image={img}
          />
          <CardContent>
            <h1>
              {weather.main} in {weatherData.name}
              <img src={iconUrl} alt={weatherData.description} />
            </h1>
            <p>Current: {weatherData && weatherData.main ? weatherData.main.temp : '--'}°</p>
            <p>High: {weatherData && weatherData.main ? weatherData.main.temp_max : '--'}°</p>
            <p>Low: {weatherData && weatherData.main ? weatherData.main.temp_min : '--'}°</p>
            <p>Wind Speed: {weatherData && weatherData.wind ? weatherData.wind.speed : '--'} m/sec</p>
            </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
