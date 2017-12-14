/**
 * Created by Amy on 2017/12/13.
 */
// import {createStore} from 'redux';

// reducer
const ADD = 'add';
const MULTIPLE = 'multiple';
export function counter( state = 0, action){
    switch (action.type){
        case ADD:
            return state+1
        case MULTIPLE:
            return state-1
        default:
            return 17
    }
}

// action creator
export function AddNum() {
 return {type:ADD}
}
export function MultipleNum() {
    return{ type: MULTIPLE}
}
export function addAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(AddNum())
        },2000)
    }
}