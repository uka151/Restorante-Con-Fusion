import {HOMEDISH} from '../shared/homedish';
import *as ActionTypes from '../redux/ActionType';

export const Homedish=(state=
    {
        errMess:null,
        homedish:[]

    }, action)=>{
    switch(action.type){
    case ActionTypes.HOMEDISH_LOADING:
         return {...state, errMess:null, homedish:action.payload}
    case ActionTypes.HOMEDISH_FAILED:
         return{...state, errMess:action.payload}
         default :
          return state;

    }
}