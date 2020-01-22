import React from 'react';
import  logo  from './assets/images/marz-newslogo.png'

export default class Navbar extends React.Component {
    render() {
        return(
            <div className="container-fluid navbar">
                <div className="row">
                    <div className="col-md-2">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                </div>
            </div>
        )
    }
} 


