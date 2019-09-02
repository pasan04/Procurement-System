import React, { Component } from 'react'

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import Table from "./Table";




class Frame extends Component {
    render() {
        return (
            <div>

                <body id="page-top">
                <div id="wrapper">

                            <div className="container-fluid">
                                <div className="card shadow">
                                    <div className="card-header py-3">
                                        <p className="text-primary m-0 font-weight-bold">Employee Info</p>
                                    </div>
                                </div>
                                <Table/>
                            </div>
                        </div>


                </body>


            </div>
            )
        }
        }
    export default Frame;
