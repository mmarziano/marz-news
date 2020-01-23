import React from 'react';

class MainImage extends React.Component {
    top5 = (props) => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            {top5articles.push(props.articles[i])}
        }
        return top5articles
    }

    render() {
        return(
            <div className="main-img-card">
                <header className="text-center">
                    <h1 className="headline">{this.props.articles[0].title}</h1>
                </header>
            </div>
        )
    }
} 

export default MainImage