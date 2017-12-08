/**
 * Created by Amy on 2017/12/8.
 */
import React,{Component} from 'react';

class LoginTriggle extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            isLogin: !prevState.isLogin
        }))
    }

    render(){
        return (
            <div className="loginBtn" onClick={this.handleClick}>
                <input type="button" value={this.state.isLogin ? '退出' : '登录'}/>
            </div>
        )
    }
}

export default LoginTriggle;