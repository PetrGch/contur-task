import { SELECT_CITY } from '../constant/control';

const initialState = {
    selectedCity: ''
};

export default function selectCity(state = initialState, action) {
    switch (action.type) {
        case SELECT_CITY:
            return Object.assign({}, state, {
                selectedCity: action.selectedCity
            });
        default:
            return state;
    }
}
