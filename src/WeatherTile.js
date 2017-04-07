import React from 'react';
import style from './main.css';

const WeatherTile = React.createClass({

    render() {
        this.convertUnixToDate();
        let iconUrl = require("./img/" + this.props.icon + ".png");
        return(
            <div className={style.weatherTile}>
                <h3>{this.convertUnixToDate()}</h3>
                <img className={style.weatherIcon} src={iconUrl}/><br/>
                <span>Status: {this.props.status}</span><br/>
                <span>Max: {this.props.max}</span><br/>
                <span>Min: {this.props.min}</span>
            </div>
        );
    },

    convertUnixToDate() {
        let date = new Date(this.props.time*1000);
        return date.getMonth() + 1 + "/" + date.getDate();
    }

});

export default WeatherTile;