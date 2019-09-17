import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/Header-Blue.css';

class Home extends Component{

    render() {
        return(

                <div>
                    <div className="header-blue">
                        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                            <div className="container">
                                <a className="navbar-brand" href="https://www.sliit.lk">Company Name</a>
                                <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
                                    <span className="sr-only">  navigation </span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navcol-1">
                                    <ul className="nav navbar-nav">
                                        <li className="nav-item" role="presentation"><a className="nav-link active" href="https://www.sliit.lk">Link</a>
                                        </li>
                                        <li className="dropdown nav-item">
                                            <a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="https://www.sliit.lk">Dropdown </a>
                                            <div className="dropdown-menu" role="menu">
                                                <a className="dropdown-item" role="presentation" href="https://www.sliit.lk">First Item</a>
                                                <a className="dropdown-item" role="presentation" href="https://www.sliit.lk">Second Item</a>
                                                <a className="dropdown-item" role="presentation" href="https://www.sliit.lk">Third Item</a>
                                            </div>
                                        </li>
                                    </ul>
                                    <form className="form-inline mr-auto" target="_self">
                                        <div className="form-group">
                                            <label htmlFor="search-field">
                                            <i className="fa fa-search"></i>
                                         </label><input
                                            className="form-control search-field" type="search" id="search-field"
                                            name="search"/></div>
                                    </form>
                                    <span className="navbar-text"> <a className="login" href="https://www.sliit.lk">Log In</a></span><a
                                    className="btn btn-light action-button" role="button" href="https://www.sliit.lk">Sign Up</a></div>
                            </div>
                        </nav>

                        <div className="container hero">
                            <div className="row">

                                    <h1>The revolution is here.</h1>
                                    <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam
                                        consequat neque quis sapien viverra convallis. In non tempus lorem. </p>
                                    <button className="btn btn-light btn-lg action-button" type="button">Learn More
                                    </button>


                            </div>

                        </div>

                    </div>

            </div>

        )
    }


}

export default Home;