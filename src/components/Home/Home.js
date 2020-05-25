import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroupItem } from 'reactstrap';
import './Home.css';

import WeatherDetail from '../WeatherDetail/WeatherDetail'
import WeatherIcon from '../WeatherIcon/WeatherIcon'

function Home(props) {
  const [cityInfo, setCityInfo] = useState([]);
  const locationDetail = `/api/location/`
  
  useEffect(() => {
    function getCityForecast(id) {
      axios.get(locationDetail + id + '/')
        .then(res => {
          const city = res.data;
          let cityObj = {
            id: id,
            cityName: city.title,
            isOpen: false,
            data: city.consolidated_weather
          };
          setCityInfo([cityObj]);
        })
        .catch(err => {
          console.log(err);
        })
    };
    getCityForecast(props.cities?.woeid);
  }, [locationDetail, props.cities]);

  const cityClick = woeid => {
    const updateCities = cityInfo.map(res =>
      res.id === woeid ? { ...res, isOpen: !res.isOpen } : res);
    setCityInfo(updateCities);
  };

  function celciusToFahrenhet(C) {
    let F = C * 9 / 5 + 32;
    return Math.round(F);
  };

  return (
    <div className="Home">
      {cityInfo.map(city => (
        <ListGroupItem key={city.id} action onClick={() => cityClick(city.id)}>
          <div className="Title">
            {city.cityName} {celciusToFahrenhet(city.data[0].the_temp)}°F <WeatherIcon key={city.Id} icon={city.data[0]?.weather_state_abbr} />
          </div>
          {city.isOpen ? <WeatherDetail key={city.id} cityDetail={city.data} /> : null}
        </ListGroupItem>
      ))}
    </div>
  );
}

export default Home;
