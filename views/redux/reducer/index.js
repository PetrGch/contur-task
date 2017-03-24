import { combineReducers } from 'redux';
import { GET_CITY_REQUEST, GET_CITY_SUCCESS, GET_CITY_ERROR } from '../constant/city';
import { SET_SPINNER, REMOVER_SPINNER } from '../constant/spinner';

const initialState = {
    city: [],
    dropDownList: false,
    isFetching: false,
    filter: '',
    error: false,
    success: false
};

function getCity(state = initialState, action) {
    switch (action.type) {
        case GET_CITY_REQUEST:
            return Object.assign({}, state, {
                filter: action.filter,
                success: false
            });
        case SET_SPINNER:
            return Object.assign({}, state, {
                isFetching: !state.success && action.spinner
            });
        case GET_CITY_SUCCESS:
            return Object.assign({}, state, {
                city: JSON.parse(action.city),
                isFetching: false,
                success: true,
                dropDownList: action.city.length !== 0 && state.filter !== ''
            });
        case GET_CITY_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default:
            return state
    }
}

function setSpinner(state = initialState, action) {
    switch (action.type) {
        case SET_SPINNER:
            return Object.assign({}, state, {

            })
    }
}

export default combineReducers({
    getCity
});

