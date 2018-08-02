import React, { Component } from 'react';
import GeoLocation from './GeoLocation';
import Weather from './Weather';
import SearchBar from './SearchBar';

export default class App extends Component {

  constructor(){
    super(); 
    this.state={
     lat:0,
     long :0,
    }
    this.selectedPlace = this.selectedPlace.bind(this);
  }

  selectedPlace(selectedPlace){
  this.setState({lat:selectedPlace.lat,long:selectedPlace.lng}) 
  }

  render() {
    return (
      <div className="selectContainer">
         <SearchBar selectLatLong={this.selectedPlace}/>
         {/* <GeoLocation/>  */}
         <Weather latLong={this.state}/>
      </div>
    )}
}