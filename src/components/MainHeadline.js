import React from 'react';

export default class MainImage extends React.Component {
    render() {
        return(
            <header className="text-center">
                <h1 className="headline">{this.props.articles[0].title}</h1>
            </header>
        )
    }
} 