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
            xhr.open("get", '/source/kladr.json', true);
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

import { CHACK_LENGTH } from '../constant/validation';

export function checkLenght(length) {
    return {
        type: CHACK_LENGTH,
        lenght: length
    }
}



