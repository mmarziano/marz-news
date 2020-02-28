import React from 'react';

export default class HeroImage extends React.Component {

    render() {
        return(
        <>  
            <div className="carousel col-md-5"> 
                {this.props.top5()}
            </div>

            <img className="main-img" src={this.props.topHeadlines[this.props.activeArticle].urlToImage} alt={""} />
        </>    
        )
    }
} 