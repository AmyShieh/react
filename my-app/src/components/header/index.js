/**
 * Created by Amy on 2017/12/6.
 */
import React, { Component } from 'react';
// import {Router,Route,Link} from 'react-router';
import Clock from '../util/clock';
import Login from '../util/login';
// import Monitor from '../body/monitor';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <Login/>
                <Clock/>
            </div>
        )
    }
}

export default  Header;