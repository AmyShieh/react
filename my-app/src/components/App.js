import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AddNum,MultipleNum,addAsync} from '../redux/reducer';

// import {createStore} from 'redux';
// import Header from './header';
// import Body from './body';
// import Monitor from './body/monitor';
import './app.css';
// import {counter} from '../redux/reducer'
// import {AddNum} from '../redux/reducer';


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
        // const store = this.props.store;
        // const num = store.getState();
        const num = this.props.num;
        const AddNum = this.props.AddNum;
        const addAsync = this.props.addAsync;
        const MultipleNum = this.props.MultipleNum;
        return(
            <div>
                 现在的数值是{num}
                <button onClick={AddNum}>+</button>
                <button onClick={MultipleNum}>-</button>
                <button onClick={addAsync}>异步+</button>
            </div>
            // <div className="App" >
            //     <Header />
            //     <Body store = {store}/>
            // </div>
        )
    }
}
const mapStatetoProps = (state)=>{
    return {num:state}
}
const actionCreator = {AddNum,MultipleNum,addAsync};
 App = connect(mapStatetoProps,actionCreator)(App)
export default App;
