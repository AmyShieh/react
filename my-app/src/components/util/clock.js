/**
 * Created by Amy on 2017/12/7.
 */
import React,{Component} from 'react';

function FormattedDate(props) {
    return (
        <p>{props.date.toLocaleTimeString()}</p>
    )
}
class Clock extends Component{
    constructor(prop){
        super(prop);
        this.state = {data: new Date()};
    }

    // 挂载
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(),1000)
    }

    // 卸载
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            data: new Date()
        })
    }

    render(){
        return(
            <div className="clock">
                <FormattedDate date = {this.state.data}/>
            </div>
        )
    }
}
export default Clock;
