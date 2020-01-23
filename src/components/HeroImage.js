import React from 'react';
import main from '../assets/images/imgplaceholder.jpg';

export default class HeroImage extends React.Component {
    render() {
        console.log(this.props.articles)
        return(
            <>
            <div className="overlay h-100 w-100"></div> 
            <img src={main} alt={""} />
            </>
        )
    }
} 