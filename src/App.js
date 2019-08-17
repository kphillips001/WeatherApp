import React, { Component } from 'react';
import Titles from './Titles';
import Form from './Form'; 
import Weather from './Weather'; 
import './App.css';
 
const API_KEY = "b28b8c8399afe7a5ed34abe3a269e783";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidty: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value; 
    const country = e.target.elements.country.value; 
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await apiCall.json(); 
    console.log(data); 
    this.setState({
      //country: data.sys.country,
      temperature: data.main.temp,
      city: data.main.city, 
      humidity: data.main.humidity,
      description: data.weather[0].description, 
      error: ""
    });
  }
   render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather
          //country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          city={this.state.city}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};
export default App;

