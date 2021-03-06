import React from 'react';
import SearchBar from './SearchBar';
import TilesContainer from './TilesContainer';
import FetchJsonP from 'fetch-jsonp';
import style from './main.css';

const ForecastContainer = React.createClass({
    getInitialState() {
        return {
            weatherObj: []
        }
    },

    getWeatherObj(lat, long) {
        FetchJsonP("https://api.darksky.net/forecast/bc01f79c757619e425429fcc2e874cb0/" + lat + "," + long)
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