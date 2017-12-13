/**
 * Created by Amy on 2017/12/6.
 */
import React, {Component} from 'react';
import Button from 'antd/lib/button'
// import 'antd/dist/antd.css'
import {AddNum} from '../../redux/reducer';
class Body extends Component{
    render(){
        const store =this.props.store;
        const num = store.getState();
        console.log(num,'------');

        return(
            <div className="content">
                现在的数值是{num}
                <button onClick={()=>store.dispatch(AddNum())}>+</button>
                {/*<Name name="内容"/>*/}
                {/*<Lname name="functionName"/>*/}
            </div>
        )
    }
}
// class Name extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             nameList:['amy','alive','shieh']
//         }
//     }
//     componentWillMount(){
//         console.log('组件马上加载');
//     }
//     componentDidMount(){
//         console.log('组件加载完毕');
//     }
//     render(){
//         console.log('组件正在加载');
//         return(
//             <div>
//                 <Button>test</Button>
//                 <ul>
//                     {this.state.nameList.map(item=>{
//                         return <li key={item}>{item}</li>
//                     })}
//                 </ul>
//
//             </div>
//         )
//     }
// }
//
// function Lname(props){
//     return <p>{props.name}</p>;
// }
export default Body;