import { combineReducers } from "redux";
import { ADD_USERS } from "../action";


const initializeUserState = {
    list:[],
}
export function users(state = initializeUserState, action){
    switch(action.type){
        case ADD_USERS:
            return{
                ...state,
                list : action.users,
            }
        default:
            return state;
    }
}

export default combineReducers({
    users,
});

