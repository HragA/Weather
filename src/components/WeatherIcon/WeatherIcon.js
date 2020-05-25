import React from 'react';
import './WeatherIcon.css'

function WeatherIcon(props) {

  function weatherIcon(sym) {
    switch (sym) {
      case "sn": // Snow
        return <i className="wi wi-snow"></i>;
      case "sl": // Sleet
        return <i className="wi wi-sleet"></i>;
      case "h": // Hail
        return <i className="wi wi-hail"></i>;
      case "t": // Thunderstorm
        return <i className="wi wi-thunderstorm"></i>;
      case "hr": // Heavy Rain
        return <i className="wi wi-rain"></i>;
      case "lr": // Light Rain
        return <i className="wi wi-rain"></i>;
      case "s": // Showers
        return <i className="wi wi-showers"></i>;
      case "hc": // Heavy Cloud
        return <i className="wi wi-day-cloudy-high"></i>;
      case "lc": // Light Cloud
        return <i className="wi wi-day-cloudy"></i>;
      default: // Clear
        return <i className="wi wi-day-sunny"></i>;
    }
  };

  return (
    <div className="WeatherIcon">
      {weatherIcon(props.icon)}
    </div>
  );
}

export default WeatherIcon;