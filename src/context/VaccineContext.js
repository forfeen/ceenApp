import jsonServer from '../api/jsonServer';
import createDataContext from './createDateContext.js';

const vaccineReducer = (state, action) => {
    switch (action.type) {
        case 'get_vaccines':
            return action.payload;
        default:
            return state;
    }
};

const getVaccines = dispatch => {
    return async () => {
        const response = await jsonServer.get('/vaccines');
        dispatch({ type: 'get_vaccines', payload: response.data});
    };
};


export const { Context, Provider} = createDataContext(vaccineReducer,
     {getVaccines}, []);