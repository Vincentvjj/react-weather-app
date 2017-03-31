import React from 'react';

const SearchBar = React.createClass({
    onClick() {
        this.props.getWeatherObj(this.refs.lat.value, this.refs.long.value);
    },

    render() {
        return(
            <div>
                <input type="text" placeholder="lat" ref="lat"/>
                <input type="text" placeholder="long" ref="long"/>
                <button onClick={this.onClick}>Search</button>
            </div>
        );
    }

});

export default SearchBar;
