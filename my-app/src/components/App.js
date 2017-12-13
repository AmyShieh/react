import React, { Component } from 'react';
// import {createStore} from 'redux';
// import Header from './header';
// import Body from './body';
// import Monitor from './body/monitor';
import './app.css';
// import {counter} from '../redux/reducer'
import {AddNum} from '../redux/reducer';


// const store = createStore(counter);

// function renderApp(){
//     let a = store.getState();
//     console.log(a);
//     return (
//         <div className="App" key={a}>
//             {console.log({a})}            
//             <Header />
//             <Body store = {store} a={a}/>
//         </div>
//     );
// }
class App extends Component{
    render(){
        const store = this.props.store;
        const num = store.getState();
        return(
            <div>
                 现在的数值是{num}
                <button onClick={()=>store.dispatch(AddNum())}>+</button>
            </div>
            // <div className="App" >
            //     <Header />
            //     <Body store = {store}/>
            // </div>
        )
    }
}
        // store.subscribe(function () {
        //     renderApp();
        //     console.log("数据变化了");
        // })
// export default renderApp;
export default App;
