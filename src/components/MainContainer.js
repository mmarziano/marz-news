import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isActive: false,
        }
       
    }

    render() {
        const { articles } = this.props;

        return(

            <div className="container-fluid">
                <div className="row col-md-6">
                       <h1>Search Results here</h1>
                </div>
            </div>
        )     
    }     
}


export default MainContainer

    