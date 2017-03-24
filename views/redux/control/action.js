export const ADD_CITY = 'ADD_CITY';

export const autocompliteCity = (city) => {
    return {
        type: ADD_CITY,
        city
    }
};
