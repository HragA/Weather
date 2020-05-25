import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, ListGroup } from 'reactstrap';
import axios from 'axios';
import './App.css';
import './css/weather-icons.min.css';
import './css/weather-icons-wind.min.css';

import Home from './components/Home/Home';

function App() {
  const [cities, setCities] = useState([]);
  const locationURL = `/api/location/search/?query=`;
  const [searchValue, setSearchValue] = useState("");

  function searchCity(name){
    axios.get(locationURL + name)
      .then(res => {
        const cities = res.data;
        // console.log(cities);
        setCities(cities);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const onSearch = data => {
    data.preventDefault();
    // console.log(searchValue);
    searchCity(searchValue);
  }
  
  return (
    <div className="App">
      <h1>Weather</h1>
      <Form inline onSubmit={onSearch}>
        <FormGroup>
          <Input placeholder="Search City Name" value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" />
          <Button color="primary">Search</Button>
        </FormGroup>
      </Form>
      {cities.length !==0 ? <ListGroup>
        {cities.map(city => (
          <Home cities={city} key={city.woeid} />
        ))}
      </ListGroup> : null}
    </div>
  );
}

export default App;
