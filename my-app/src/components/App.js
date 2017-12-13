import React, { Component } from 'react';
import Header from './header';
import Body from './body';
// import Monitor from './body/monitor';
import './app.css';
import {createStore} from 'redux';
import {conster} from '../redux/reducer'

const store = createStore(conster);

// function renderApp(){
//     let a = store.getState();
//     console.log(a);
//     return (
//         <div className="App" key={a}>
//             <Header />
//             <Body store = {store} a={a}/>
//         </div>
//     );
// }
class App extends Component{
    constructor(props){
        super(props);
        this.render = this.render.bind(this);
    }
    render(){
        return(
            <div className="App" >
                <Header />
                <Body store = {store}/>
            </div>
        )
    }
    componentDidUpdate(){
        console.log(111);
    }
    componentDidMount(){
        // 绑定完成
        console.log('绑定完成');
        store.subscribe(function () {
            // renderApp();
            this.render();
            console.log("数据变化了");
        })
    }
}

// export default renderApp;
export default App;
