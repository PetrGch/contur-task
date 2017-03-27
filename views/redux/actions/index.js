import { GET_CITY_REQUEST, GET_CITY_SUCCESS, GET_CITY_ERROR } from '../constant/city';
import { SET_SPINNER } from '../constant/spinner';

export function getCity(cityFilter) {
    return (dispatch) => {
        dispatch({
            type: GET_CITY_REQUEST,
            filter: cityFilter
        });

        setTimeout(() => {
            dispatch({
                type: SET_SPINNER,
                spinner: true
            })
        }, 500);

        let promise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let path = NODE_ENV === 'production' ? 'city?data=city' : 'data/kladr.json';

            xhr.open("get", path, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            xhr.onreadystatechange = () => {

                if (xhr.readyState != 4) return;

                if (xhr.status != 200) {
                    reject(xhr.status + ': ' + xhr.statusText)
                } else {
                    resolve(xhr.responseText);
                }
            };

            xhr.send();
        });

        promise.then((value) => {
            dispatch({
                type: GET_CITY_SUCCESS,
                city: value
            })
        }).catch((value) => {
            console.error(value);
            dispatch({
                type: GET_CITY_ERROR,
                error: true
            })
        });
    }
}

import { MAKE_CITY_ACTIVE } from '../constant/city';

export function setCityActive(cityID) {
    return {
        type: MAKE_CITY_ACTIVE,
        cityID: cityID
    }
}

import { CHACK_LENGTH } from '../constant/validation';

export function checkLenght(length) {
    return {
        type: CHACK_LENGTH,
        lenght: length
    }
}

import { SELECT_CITY } from '../constant/control';

export function selectCity(city) {
    return {
        type: SELECT_CITY,
        selectedCity: city
    }
}




