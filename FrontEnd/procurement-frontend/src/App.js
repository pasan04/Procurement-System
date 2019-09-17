import React, { Component } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Footer-Clean.css';
//import EmpReg from'./Employees/Employee_registration';


import Home from "./Template/Home";
//import Content from "./Template/Content";



class App extends Component {
    render() {
        return (
            <div>
                <Home/>
                {/*<EmpReg/>*/}
{/*<Frame/>*/}
{/*<Content/>*/}
            </div>
        )
    }
}


export default App;