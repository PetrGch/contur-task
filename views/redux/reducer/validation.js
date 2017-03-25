import { CHACK_LENGTH } from '../constant/validation';

const initialState = {
    length: false
};

export default function checkLenght(state = initialState, action ) {
    switch (action.type) {
        case CHACK_LENGTH:
            console.log(action);
            return Object.assign({}, state, {
                length: action.lenght
            });
        default:
            return state
    }
}
