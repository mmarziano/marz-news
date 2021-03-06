import React from 'react';
import Moment from 'react-moment';

export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: '',
        }
    }

    handleCommentInput = (e) => {
        this.setState(
            { comment: e.target.value },
            () => {console.log (this.state)}
          );
    }

    render() {
        const {result, index, articles} = this.props

        return(
            <div className="column text-center">
            <li className="card-article" key={index}>
                    <img src={result.urlToImage} alt={result.title} />
                <div className="infobox">
                    <p className="author">{result.author}</p>
                    <p className="article-date"><Moment format="MM/DD/YYYY">
                        {result.publishedAt}
                    </Moment> </p>
                    <p onClick={this.props.saveArticle.bind(this, index, articles)} className="bookmark"><i className='fa fa-save'></i> Bookmark Article</p>
                    <a href={result.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i> Link to Article</a>
                    <p>{result.timesSaved}</p>
                </div>
                <div className='article-overlay text-center'>
                    <a href={result.url} target="_blank" rel="noopener noreferrer"><h3  className='heading'>{result.title}</h3></a>
                    <p className="blurb">{result.content}</p>

                </div>
            </li>
        </div>
        )
    }
} 