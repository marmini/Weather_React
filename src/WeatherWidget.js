import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import { Grid, Row } from 'react-bootstrap';
import './Weather.css';
import { getweather } from './actions/type';

var url = '';
const weatherApiKey = '0a102e5fc588f4891af383b809a2ba86';
class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            lat: 0,
            long: 0,
            temperature: 0,
            humidity: 0,
            country: '',
            city: '',
            icon: '',
            list: {

            }

        };
        this.getStateLatLng = this.getStateLatLng.bind(this);
    }

    handleChange = address => {
        this.setState({ address });
    };

    getStateLatLng(latLng) {
        this.setState({ lat: latLng.lat, long: latLng.lng })
        url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + this.state.lat + '&lon=' + this.state.long + '&appid=' + weatherApiKey;
        console.log(url)
        fetch(url)
            .then(data => data.json())
            .then(parsedData =>
                this.props.getweather(parsedData)
            );
    }

    handleSelect = (address, Location) => {
        geocodeByAddress(address, Location)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.getStateLatLng(latLng))
            .catch(error => console.error('Error', error));
    };

    setWeather = (position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;

        this.setState({
            lat: this.lat,
            long: this.lon
        });

        url = 'http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + this.lat + '&lon=' + this.lon + '&appid=' + weatherApiKey;
        console.log(url)
        fetch(url)
            .then(data => data.json())
            .then(parsedData =>
                this.props.getweather(parsedData)
            );
    }


    getLocation = () => {
        navigator.geolocation.getCurrentPosition(this.setWeather);
    }

    componentWillMount() {
        this.getLocation();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            list:
                nextProps.list
        })
    }

    render() {
        return (
            <div>
                <PlacesAutocomplete
                    value={this.state.address}
                    onChange={this.handleChange}
                    onSelect={this.handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                            />
                            <div className="autocomplete-dropdown-container">
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
                <div id="appContainer">
                    <Grid>
                        <Row className="showGrid" id="imgRow">
                            <img src={'http://openweathermap.org/img/w/' + this.state.list.icon + '.png'} alt="" id="weatherImage" />
                        </Row>
                        <Row className="showGrid" id="tempRow">
                            <label className="bigText">{this.state.list.temperature}ºC</label>
                        </Row>
                        <Row className="showGrid" id="humidityRow">
                            <label className="regularText">Humidity:</label>
                            <label className="regularText">{this.state.list.humidity}%</label>
                        </Row>
                        <Row className="showGrid" id="locationRow">
                            <label className="regularText">{this.state.list.city},</label>
                            <label className="regularText"> {this.state.list.country}</label>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        list: state
    }
}
const mapDispatchToProps = dispatch => {

    return {
        getweather: (parsedData) => {
            dispatch(getweather(parsedData))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);