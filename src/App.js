import React, { Component } from 'react';
import Shapes from './Shapes';
import './Shapes.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div  >Shapes & Colors</div>
      <div className="App-body">
        <Shapes className='square-css' color='red' shape='square'/>
        <Shapes className='circle-css' color='blue' shape='circle'/>
        <Shapes className='rectangle-css' color='pink' shape='rectangle'/>
        </div>
      </div>
    );
  }
}

export default App;
