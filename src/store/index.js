import {configureStore} from "redux-starter-kit";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/rootReducer";
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash.throttle';


function createStore() {
    const persistedState = loadState();
    if (persistedState != null) {
        persistedState.favourCityReducer.cities = persistedState.favourCityReducer.cities.filter(function(city) {return !city.isUpdating;});

        return configureStore({
            reducer: rootReducer,
            middleware: [thunk],
            preloadedState: persistedState
        });
    } else {
        return configureStore({
            reducer: rootReducer,
            middleware: [thunk]
        });
    }
}

const store = createStore();

store.subscribe(throttle(function() {
    saveState(
        store.getState()
    );
}, 1000));

export default store;
