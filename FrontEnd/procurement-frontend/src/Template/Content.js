import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Switch,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/best-carousel-slide.css';
import Table from './Frame';



class  Content extends Component {


    render() {

    return(
        <Router>

        <body>
        <section id="carousel">
            <div className="carousel slide" data-ride="carousel" id="carousel-1">
                <div className="carousel-inner" role="listbox">


                    <div className="carousel-item active">
                        <div className="jumbotron pulse animated hero-technology carousel-hero">
                            <h1 className="hero-title">Hero Technology</h1>
                            <p className="hero-subtitle">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                                justo odio,
                                dapibus ac facilisis in, egestas eget quam.</p>

                            <Switch>
                                <button className="btn btn-primary hero-button plat"> <Link to="/Table">Learn more</Link></button>
                            </Switch>
                            <Route path="/Table" exact component ={Table}/>

                        </div>
                    </div>
                </div>
                <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><i
                    className="fa fa-chevron-left"/><span className="sr-only">Previous</span></a><a
                    className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><i
                    className="fa fa-chevron-right"/><span className="sr-only">Next</span></a></div>

            </div>
        </section>
        <script src="../assets/js/jquery.min.js"/>
        </body>

        </Router>
    )
    }
}

export default Content;