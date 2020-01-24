import React from 'react';

class MainImage extends React.Component {

    render() {
        return(
            <div className="main-img-card">
                <header className="text-center">
                    <h1 className="headline">{this.props.articles[this.props.activeArticle].title}</h1>
                </header>
            </div>
        )
    }
} 

export default MainImage