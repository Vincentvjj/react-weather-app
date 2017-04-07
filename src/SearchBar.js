import React from 'react';
import style from './main.css';

const SearchBar = React.createClass({
    onClick() {
        this.props.getWeatherObj(this.refs.lat.value, this.refs.long.value);
    },

    render() {
        return(
            <div>
                Lat: <input type="text" placeholder="lat" ref="lat" className={style["margin-bottom"]}/>
                <br/>
                Long: <input type="text" placeholder="long" ref="long" className={style["margin-bottom"]}/>
                <br/>
                <button onClick={this.onClick}>Search</button>
            </div>
        );
    }

});

export default SearchBar;
