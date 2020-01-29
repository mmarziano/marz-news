import React from 'react';
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
                            <div className='article-overlay'>
                                <h2 classname='headline'>{result.title}</h2>
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

    