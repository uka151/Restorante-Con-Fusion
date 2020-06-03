import {createStore} from 'redux';
import {Reducer, initialState} from '../redux/reducer';

export const configureStore =()=>{
    const store = createStore(Reducer, initialState);

    return store;
};

