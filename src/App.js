import React, { Component } from 'react';
import WeatherWidget from './WeatherWidget';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="selectContainer">
        <WeatherWidget />
      </div>
    )
  }
}

export default App;