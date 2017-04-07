import React from 'react';
import SearchBar from './SearchBar';
import TilesContainer from './TilesContainer';
import 'whatwg-fetch';
import style from './main.css';

const ForecastContainer = React.createClass({
    getInitialState() {
        return {
            weatherObj: []
        }
    },

    getWeatherObj(lat, long) {
        fetch("https://api.darksky.net/forecast/7f80521dd2878da15b216d99e588f1e5/" + lat + "," + long)
            .then((res) => {return res.json()})
            .then((json) => {
                this.setState({
                    weatherObj : json.daily
                });
            });
    },

    render() {
        return(
            <div className={style.center}>
                <SearchBar getWeatherObj={this.getWeatherObj}/><br/>
                <TilesContainer weatherObj={this.state.weatherObj} />
            </div>
        );
    }

});

export default ForecastContainer;