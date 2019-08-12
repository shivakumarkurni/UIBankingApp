import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as userAction from '../../action/action';
import Login from '../login/login';
import Home from '../home/home'
import CreateAccount from '../create-account/createAccount';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Header extends Component {
    
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to='/'>Banking Application</Link>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/register" component={CreateAccount} />
                    <Route exact path="/logout" component={Login} />
                    <Route exact path="/home" component={Home} />
                </Switch>
                
                <ToastContainer />
            </div>
        );
    }
}



export default Header;