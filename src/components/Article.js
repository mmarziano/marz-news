import React from 'react';
import Moment from 'react-moment';

export default class Article extends React.Component {
    render() {

        const {result} = this.props

        return(
            <div className="column text-center">
            <li className="card-article">
                <img src={result.urlToImage} alt={result.title} />
                <p id="author">{result.author}</p>
                <p id="article-date"><Moment format="MM/DD/YYYY">
                    {result.publishedAt}
                </Moment> </p>
                <a href={result.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i> Link to Article</a>
                <div className='article-overlay text-center'>
                    <a href={result.url} target="_blank" rel="noopener noreferrer"><h3 className='heading'>{result.title}</h3></a>
                </div>
            </li>
        </div>
        )
    }
} 