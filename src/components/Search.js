import React from 'react';
import Moment from 'react-moment';


class SearchContainer extends React.Component {
    

    renderResults = () => {
        return this.props.results.searchArticles.map(result => 
            
            <div className="column">
                <figure>
                    <div className="container-article">
                        <li className="card-article">
                            <img src={result.urlToImage} alt={result.title} />
                            <p id="author">{result.author}</p>
                            <p id="article-date"><Moment format="MM/DD/YYYY">
                                {result.publishedAt}
                            </Moment> </p>
                            <a href={result.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i> Link to Article</a>
                            <div className='article-overlay'>
                                <a href={result.url} target="_blank" rel="noopener noreferrer"><h3 className='headline'>{result.title}</h3></a>
                            </div>
                        </li>
                    </div>
                </figure>
            </div>
        )
    }

        
    render() {
        if (this.props.results.searchArticles !== null ) {
            return( 
                    <div className="article-grid text-center">
                        <h3>Displaying results...</h3>
                        <ul>
                            {this.renderResults()}
                  
                        </ul>
                    </div>
            )
        } else {
            return null;
        }
    }     
}



export default SearchContainer

    