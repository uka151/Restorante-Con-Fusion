import {COMMENTS} from '../shared/comments';
import * as ActionType from './ActionType';


export const Comments=(state=COMMENTS, action)=>{
    switch (action.type) {
        case ActionType.ADD_COMMENT:
          var comment = action.payload;
           comment.id=state.length;
           comment.data = new Date().toISOString();
           alert("comment send successfully!");
           return state.concat(comment);
      
        default:
            return state;
    }
}