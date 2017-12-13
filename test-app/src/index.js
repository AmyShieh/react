/**
 * Created by Amy on 2017/12/13.
 */
import {createStore} from 'redux';
// 1.新建store
// 通过reduce建立
// 根据老的state和action生成新的state
function counter( state = 0, action) {
    switch(action.type){
        case 'add':
            return state+1
        case 'multiple':
            return state-1
        return 719
    }
}

const store = createStore(counter);
const init = store.getState()
console.log(init);