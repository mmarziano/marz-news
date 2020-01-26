import React from 'react';

class MainImage extends React.Component {

    render() {
        let title = this.props.topHeadlines[this.props.activeArticle].title.split('-')[0]
        return(
            <div className="main-img-card">
                <header className="text-center">
                    <h1 className="headline">{title}</h1>
                </header>
            </div>
        )
    }
} 

export default MainImage