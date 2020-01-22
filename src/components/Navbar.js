import React from 'react';
import  logo  from '../assets/images/marz-newslogo.png'

export default class Navbar extends React.Component {
    render() {
        return(
            <div className="container-fluid navbar">
                <div className="row col-md-12">
                    <div className="col-md-2">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                    <div className="col-md-10">
                        <menu className="right">
                            <li>Top Headlines</li>
                            <li>Search</li>
                            <li><i className="fa fa-sign-in"></i></li>
                        </menu>
                    </div>
                </div>
            </div>
        )
    }
} 


