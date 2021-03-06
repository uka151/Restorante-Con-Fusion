import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Leaders} from './leader';
import {Comments} from './comment';
import {Homedish} from './homedish';
import {Dishes} from './dishes';
import {Promotions} from './promotion';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';




export const configureStore =()=>{
    const store = createStore(
    combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        homedish:Homedish,
        promotions:Promotions,
        ...createForms({
            feedback: InitialFeedback
        })
    }),
    applyMiddleware(thunk, logger)    
        );

    return store;
};

