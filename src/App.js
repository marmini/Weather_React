import React, { Component } from 'react';
import GeoLocation from './GeoLocation';
import Weather from './Weather';

export default class App extends Component {

  constructor(){
    super(); 
    this.state={
    
    }
  }

  render() {
    return (
      <div>
         <GeoLocation/> 
         <Weather />
      </div>
    )}
}