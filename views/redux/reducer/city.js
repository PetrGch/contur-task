import { GET_CITY_REQUEST, GET_CITY_SUCCESS, GET_CITY_ERROR, MAKE_CITY_ACTIVE } from '../constant/city';
import { SET_SPINNER } from '../constant/spinner';

const initialState = {
    city: [],
    dropDownList: false,
    isFetching: false,
    filter: '',
    error: false,
    success: false
};

function sortCity(a, b) {
    return a.City - b.City;
}

function filterCity(cityList, filterValue) {
    let city = JSON.parse(cityList);
    return city.filter((item) => {
        let inputData = item.City.toLowerCase().trim();
        let inputFilter = filterValue.toLowerCase().trim();
        return inputData.startsWith(inputFilter) && inputFilter !== '';
    }).sort(sortCity).map((item, index) => {
        if (index === 0) {
            let activeItem = Object.assign({}, item, {
                active: 'active'
            });
            return activeItem;
        }
        return item;
    });
}

export default function getCity(state = initialState, action) {
    switch (action.type) {
        case GET_CITY_REQUEST:
            return Object.assign({}, state, {
                filter: action.filter,
                success: false
            });
        case SET_SPINNER:
            return Object.assign({}, state, {
                isFetching: !state.success && action.spinner && !state.error && state.filter !== ''
            });
        case GET_CITY_SUCCESS:
            return Object.assign({}, state, {
                city: filterCity(action.city, state.filter),
                isFetching: false,
                success: true,
                dropDownList: action.city.length !== 0 && state.filter !== '' && /^[а-яА-Я0-9]+$/.test(state.filter)
            });
        case GET_CITY_ERROR:
            return Object.assign({}, state, {
                error: action.error && state.filter !== ''
            });
        case MAKE_CITY_ACTIVE:
            return Object.assign({}, state, {
                city: state.city.map((item) => {
                    if (item.Id === action.cityID) {
                        let activeItem = Object.assign({}, item, {
                            active: 'selected'
                        });
                        return activeItem;
                    }
                    return item;
                })
            });
        default:
            return state
    }
}
