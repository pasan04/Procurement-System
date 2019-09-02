import React, { Component } from 'react'

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';




class Table extends Component {
    render() {
        return (
            <div>

                <body>


                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Column 1</th>
                            <th>Column 2</th>
                            <th>Column 3</th>
                            <th>Column 4</th>
                            <th>Column 5</th>
                            <th>Column 6</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Cell 1</td>
                            <td>Cell 2</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td><i className="fa fa-trash-o"></i></td>
                            <td><i className="fa fa-pencil"></i></td>
                        </tr>
                        <tr>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td>Cell 3</td>
                            <td>Cell 4</td>
                            <td><i className="fa fa-trash-o"></i></td>
                            <td><i className="fa fa-pencil"></i></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <script src="assets/js/jquery.min.js"></script>
                <script src="assets/bootstrap/js/bootstrap.min.js"></script>
                </body>



            </div>
        )
    }
}


export default Table;