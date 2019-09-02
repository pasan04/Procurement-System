import React, { Component } from 'react'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import './assets/css/Login-Form-Clean.css';
import './assets/css/Navigation-with-Button.css';
import './assets/css/Footer-Clean.css';

import Frame from "./Template/Frame";
import Header from "./Template/Header";


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
<Frame/>
            </div>
        )
    }
}


export default App;