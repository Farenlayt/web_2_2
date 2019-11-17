import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Application from './components/Application/Application';
import FavourCitiesHeader from "./components/FavourCitiesHeader/FavourCitiesHeader";
import {Provider} from "react-redux";
import MajorCityWrapper from "./components/MajorCityWrapper/MajorCityWrapper";
import WeatherBody from "./components/WeatherBody/WeatherBody";
import FavourCitiesWrapper from "./components/FavourCitiesWrapper/FavourCitiesWrapper";
import Error from "./components/Error/Error";
import Loader from "./components/Loader/Loader";
import storage from "./store/FakeStorage.js"


it('Renders is ok.', function() {
    const div = document.createElement('div');
    ReactDOM.render(<Application/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Empty major is ok.', function() {
    const tree = renderer.create(
        <Provider store={storage}>
            <Application/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });