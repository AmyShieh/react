import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


//
// const store = createStore(conster);
// const init = store.getState();
// console.log(init);
//
// function listner(){
//     const current = store.getState();
//     console.log(`在变动以后 ${current}`);
// }
//
// store.subscribe(listner);
//
// // 派发事件
// store.dispatch({type:'add'})
// console.log(store.getState())
// store.dispatch({type:'multiple'})
// console.log(store.getState())