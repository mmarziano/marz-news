import React from 'react';
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
                    <div className="carousel col-md-6 text-center">
                        {this.props.top5()}
                    </div>  
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


