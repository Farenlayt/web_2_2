import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import storage from "../../store/FakeStorage";
import Loader from "../Loader/Loader";
import React from "react";

it('Main city loader is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <Loader isMajor={true}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});

it('Favour city loader is ok.', function() {
    const dom = renderer.create(
        <Provider store={storage}>
            <Loader isMajor={false}/>
        </Provider>
    ).toJSON();
    expect(dom).toMatchSnapshot();
});
