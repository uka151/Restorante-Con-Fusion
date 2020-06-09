import {createStore, combineReducers} from 'redux';
import {Leaders} from './leader';
import {Comments} from './comment';
import {Homedish} from './homedish';
import {Dishes} from './dishes';
import {Promotions} from './promotion';


export const configureStore =()=>{
    const store = createStore(
    combineReducers({
        dishes:Dishes,
        leaders:Leaders,
        comments:Comments,
        homedish:Homedish,
        promotions:Promotions
    })    
        );

    return store;
};

