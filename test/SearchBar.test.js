import React from 'react';
import style from '../src/main.css';
import SearchBar from '../src/SearchBar';
import renderer from 'react-test-renderer';

test('testing test', () => {


    const getWeatherObj = function () {
        return true;
    };
    const component = renderer.create(
        <SearchBar getWeatherObj={getWeatherObj}/>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});