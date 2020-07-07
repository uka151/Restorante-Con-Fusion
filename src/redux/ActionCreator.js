import * as ActionTypes from './ActionType';
import {DISHES} from '../shared/dishes';
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));
    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes =(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes

});

export const fetchComments=()=>(dispatch)=>{
    return fetch(baseUrl+'comments')
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)));
};
export const addComments = (comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments

});

export const commentsFailed =(errmess)=>({
    type:ActionTypes.COMMENTS_FAILED,
    payload:errmess
});

export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading());
    
    return fetch(baseUrl + 'promotions')
    .then (response => response.json())
    .then(promos=> dispatch(addPromos(promos)));
};


export const promosLoading=()=>({
  type:ActionTypes.PROMOS_LOADING

});

export const promosFailed = (errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});
export const addPromos = (promos)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promos
});

export const fetchHomedish=()=>(dispatch)=>{
    dispatch(homedishLoading());
    
    return fetch(baseUrl + 'homedish')
    .then (response => response.json())
    .then(homedish=> dispatch(addHomedish(homedish)));
};


export const homedishLoading=()=>({
  type:ActionTypes.HOMEDISH_LOADING

});

export const homeFailed = (errmess)=>({
    type:ActionTypes.HOMEDISH_FAILED,
    payload:errmess
});
export const addHomedish = (homedish)=>({
    type:ActionTypes.ADD_HOMEDISH,
    payload:homedish
});




