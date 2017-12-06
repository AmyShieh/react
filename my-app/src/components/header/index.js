/**
 * Created by Amy on 2017/12/6.
 */
import React, { Component } from 'react';
import {Router,Route,Link} from 'react-router';
import Monitor from '../body/monitor';
import './index.css';

class Header extends Component{
    render(){
        return(
            <div className="header">
                {/*<Router>*/}
                    {/*/!*<Route path="/" component={Monitor}></Route>*!/*/}
                {/*</Router>*/}
                {/*<ul>*/}
                    {/*<li><Link to="/perfomance"></Link></li>*/}
                    {/*<li><Link to="/monitor"></Link></li>*/}
                    {/*<li><Link to="/systemTool"></Link></li>*/}
                {/*</ul>*/}
            </div>
        )
    }
}

export default  Header;