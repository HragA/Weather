import React from 'react';
import './WeatherDetail.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

import WeatherIcon from '../WeatherIcon/WeatherIcon'

function WeatherDetail(props) {

  function celciusToFahrenhet(C) {
    let F = C * 9 / 5 + 32;
    return Math.round(F);
  };

  return (
    <div className="WeatherDetail">
      <h2>Weather Detail</h2>
      <ListGroup horizontal>
        {props.cityDetail.map(city => (
          <ListGroupItem key={city.id}>
            <WeatherIcon key={city.id} icon={city?.weather_state_abbr} />
            <h4>{city.weather_state_name}</h4>
            <h3>{celciusToFahrenhet(city.the_temp)}°F</h3>
            <h5>Low: {celciusToFahrenhet(city.min_temp)}°F High:{celciusToFahrenhet(city.max_temp)}°F</h5>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default WeatherDetail;