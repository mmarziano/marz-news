import React from 'react';
import main from '../assets/images/imgplaceholder.jpg';

export default class HeroImage extends React.Component {
   
    renderImgURL = () => {return this.props.articles[0].urlToImage}
    
    render() {
        return(
            <>
            <div className="overlay h-100 w-100"></div> 
            <img className="main-img" src={this.renderImgURL()} alt={""} />
            </>
        )
    }
} 