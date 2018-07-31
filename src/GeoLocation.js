import React, { Component } from 'react';

class GeoLocation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
    };
}


componentDidMount() {
  this.watchId = navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,       
      });
    }
  );
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchId);
}

render() {
  return (
    <div>
      <h5>Latitude=> {this.state.lat}</h5>
      <h5>Longitude=> {this.state.long}</h5>
    </div>
  );
}
}
export default GeoLocation;