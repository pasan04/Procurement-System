import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/Pretty-Registration-Form.css';
// import '../assets/js/jquery.min';
//import '../assets/js/script';



class Employee_registration extends Component{
    render() {
        return <div>
            <div className="row register-form">
                <div className="col-md-8 offset-md-2">
                    <form className="custom-form">
                        <h1>Register Form</h1>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column">
                                <label className="col-form-label" htmlFor="name-input-field">Name</label>
                            </div>
                            <div className="col-sm-6 input-column">
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column">
                                <label className="col-form-label" htmlFor="email-input-field">Email </label>
                            </div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="email"/></div>
                        </div>

                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column">
                                <label className="col-form-label" htmlFor="email-input-field">Position </label>
                            </div>
                            <div className="col-sm-4 input-column">


                                <select>
                                    <option value="grapefruit">Site Manager</option>
                                    <option value="lime">Procurement Officer</option>
                                    <option value="coconut">Manager</option>

                                </select>


                            </div>
                        </div>


                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                          htmlFor="dropdown-input-field">Location </label>
                            </div>
                            <div className="col-sm-4 input-column">


                                <select>
                                    <option value="grapefruit">Thalawathugoda</option>
                                    <option value="lime">Borella</option>
                                    <option value="coconut">Pitakotte</option>
                                    <option value="mango">Pettah</option>
                                </select>


                            </div>
                        </div>



                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                          htmlFor="pawssword-input-field">Password </label>
                            </div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="password"/>
                            </div>
                        </div>
                        <div className="form-row form-group">
                            <div className="col-sm-4 label-column"><label className="col-form-label"
                                                                          htmlFor="repeat-pawssword-input-field">Repeat
                                Password </label></div>
                            <div className="col-sm-6 input-column"><input className="form-control" type="password"/>
                            </div>
                        </div>

                        <div className="form-check"><input className="form-check-input" type="checkbox"
                                                           id="formCheck-1"/>
                            <label className="form-check-label" htmlFor="formCheck-1">I've read and accept the terms and
                                conditions</label>
                        </div>
                        <button className="btn btn-light submit-button" type="button">Register</button>
                    </form>
                </div>
            </div>
            <script src="../assets/js/jquery.min.js"/>

        </div>;
    }



}

export default Employee_registration;