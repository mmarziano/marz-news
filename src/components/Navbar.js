import React from 'react';
import Carousel from './Carousel'
import  logo  from '../assets/images/marz-newslogo.png'

export default class Navbar extends React.Component {
    render() {
        const { articles } = this.props;

        return(
            <div className="container-fluid navbar">
                <div className="row col-md-12">
                    <div className="col-md-3">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                    <Carousel articles={articles} />
                    <div className="col-md-3">
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


