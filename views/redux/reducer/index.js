import { combineReducers } from 'redux';
import checkLenght from './validation';
import getCity from './city';
import selectCity from './control';

export default combineReducers({
    getCity,
    checkLenght,
    selectCity
});

