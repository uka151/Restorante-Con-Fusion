import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';
import { HOMEDISH } from '../shared/homedish';


export const initialState={
    dishes: DISHES,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      homedish:HOMEDISH,

};

export const Reducer=(state=initialState, Action)=>{
    return state;
};