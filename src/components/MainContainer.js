import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 0,
            isActive: false,
        }
       
    }

    render() {
        const { articles } = this.props;

        return(

                       <h1>Search Results here</h1>
  
        )     
    }     
}


export default MainContainer

    