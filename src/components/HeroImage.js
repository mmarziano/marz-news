import React from 'react';
import main from '../assets/images/imgplaceholder.jpg';

export default class HeroImage extends React.Component {
    
    renderImgURL = () => {return this.props.articles[this.props.activeArticle].urlToImage}
    
    render() {
        return(
            <>
                <img className="main-img" src={this.renderImgURL()} alt={""} />
            </>
        )
    }
} 