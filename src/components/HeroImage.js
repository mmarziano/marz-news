import React from 'react';

export default class HeroImage extends React.Component {

    render() {
        return(
            <>
                <img className="main-img" src={this.props.topHeadlines[this.props.activeArticle].urlToImage} alt={""} />
            </>
        )
    }
} 