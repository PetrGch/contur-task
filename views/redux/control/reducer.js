import { combineReducers } from 'redux';
import { ADD_CITY } from './action';

const cityList = (state = '', action) => {
    switch (action.type) {
        case ADD_CITY:
            return action.city;
        default:
            return state
    }
};

const cityApp = combineReducers({
    cityList
});

export default cityApp;
