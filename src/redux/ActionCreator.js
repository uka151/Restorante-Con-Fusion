import * as ActionType from './ActionType';

export const AddComment =(dishId, rating, author , comment)=>({
    type:ActionType.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});