import React, { Component } from 'react';
import {Grid, Row} from 'react-bootstrap';
import './Weather.css';

const weatherApiKey='0a102e5fc588f4891af383b809a2ba86';
var url = '';

export default class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude:this.props.lat,
      longitude:this.props.long,
      temperature:0,
      humidity:0,
      country:'',
      city:'',
      icon:''
    }
  }

  componentWillReceiveProps(nextProps){
    this.lat=nextProps.latLong.lat
    this.lon=nextProps.latLong.long

    url = 'http://api.openweathermap.org/data/2.5/weather?'+'lat='+this.lat+'&lon='+this.lon+'&appid='+weatherApiKey;
    console.log(url)
    fetch(url)
    .then(data => data.json())
    .then(parsedData => this.setState({ 
      country : parsedData.sys.country,
      city :parsedData.name,
      temperature : Number((parsedData.main.temp-273.15).toFixed(1)),
      humidity : parsedData.main.humidity,
      feelslike : parsedData.weather[0].description,
      icon : parsedData.weather[0].icon
    }));
  }
  
  setWeather=(position)=>{
    this.lat=position.coords.latitude;
    this.lon=position.coords.longitude;
    
    this.setState({
      latitude:this.lat,
      longitude:this.lon
    });

    url = 'http://api.openweathermap.org/data/2.5/weather?'+'lat='+this.lat+'&lon='+this.lon+'&appid='+weatherApiKey;
    console.log(url)
    fetch(url)
    .then(data => data.json())
    .then(parsedData => this.setState({ 
      country : parsedData.sys.country,
      city :parsedData.name,
      temperature : Number((parsedData.main.temp-273.15).toFixed(1)),
      humidity : parsedData.main.humidity,
      feelslike : parsedData.weather[0].description,
      icon : parsedData.weather[0].icon
    }));
  
  }
  
  getLocation=()=>{
    navigator.geolocation.getCurrentPosition(this.setWeather);
  }

  componentWillMount(){
    this.getLocation();
  }

  //render method
  render() {
    console.log("State:",this.state)
    return (
      <div id="appContainer">
          <Grid>
            <Row className="showGrid" id="imgRow">
              <img src={'http://openweathermap.org/img/w/'+this.state.icon+'.png'} alt="" id="weatherImage" />
            </Row>
            <Row className="showGrid" id="tempRow">
              <label className="bigText">{this.state.temperature}ºC</label>
            </Row>
            <Row className="showGrid" id="humidityRow">
              <label className="regularText">Humidity:</label>
              <label className="regularText">{this.state.humidity}%</label>
            </Row> 
            <Row className="showGrid" id="locationRow">
              <label className="regularText">{this.state.city},</label>
              <label className="regularText"> {this.state.country}</label>
            </Row>
          </Grid>
      </div>
    )
  }
}