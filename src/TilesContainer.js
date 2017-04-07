import React from 'react';
import WeatherTile from './WeatherTile';

const TilesContainer = React.createClass({

    render() {
        const weatherObj = this.props.weatherObj;

        if(weatherObj.length !== 0) {
            let tiles = [];
            // for the next six days
            for(let i = 0; i < weatherObj.data.length - 2; i++) {
                let weatherDataTile = weatherObj.data[i];
                tiles.push(
                    <WeatherTile
                        key={weatherDataTile.time}
                        time={weatherDataTile.time}
                        icon={weatherDataTile.icon}
                        status={weatherDataTile.icon}
                        min={weatherDataTile.temperatureMin}
                        max={weatherDataTile.temperatureMax}/>);
            }
            return(
                <div>
                    {tiles}
                </div>
            );
        } else {
            return(
                <div>Please input lat and long</div>
            );
        }

    }


});

export default TilesContainer;