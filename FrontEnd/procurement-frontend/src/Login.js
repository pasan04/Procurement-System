import React, { Component } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Footer-Clean.css';
import Header from "./Template/Header";

class Login extends Component {
    render() {
        return (
            <div className="App">
            <Header/>
                <div className="login-clean">
                    <form method="post">
                        <h2 className="sr-only">Login Form</h2>
                        <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email"/>
                        </div>
                        <div className="form-group"><input className="form-control" type="password" name="password"
                                                           placeholder="Password"/></div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit">Log In</button>
                        </div>
                        <a className="forgot" href="#">Forgot your email or password?</a></form>
                </div>

                </div>

        )
    }
}


export default Login;