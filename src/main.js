import React from 'react';
import ReactDOM from 'react-dom';
import ForecastContainer from './ForecastContainer.js';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(ForecastContainer),
        document.getElementById('forecast-container')
    );
});