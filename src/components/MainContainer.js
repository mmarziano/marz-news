import React from 'react';
import search from '../assets/images/searchresults.jpg';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class MainContainer extends React.Component {
    

    renderResults = () => {
        return this.props.searchResults.searchArticles.map(result => 
            
            <div className="column">
                <figure>
                    <div className="container-article">
                        <li className="card-article">
                            <img src={result.urlToImage} alt={result.title} />
                            <p id="author">{result.author}</p>
                            <p id="article-date"> {result.publishedAt}</p>
                            <a href={result.url} target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i> Link to Article</a>
                            <div className='article-overlay'>
                                <a href={result.url} target="_blank"><h3 classname='headline'>{result.title}</h3></a>
                            </div>
                        </li>
                    </div>
                </figure>
            </div>
        )
    }

        
    render() {
        if (this.props.searchResults.searchArticles !== null ) {
            return( 
                    <div className="article-grid">
                        <img src={ search } alt="search results" className="header" />
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



export default MainContainer

    