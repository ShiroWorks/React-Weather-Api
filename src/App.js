import React from 'react';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_WHEATHER;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  };
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=hu&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();
   

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: 'Kérlek add meg az értékeket.'

      });
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 title-container">
            <Titles />
          </div>
          <div className="col-sm-12 form-container">
            <Form getWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              wind={this.state.wind}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
