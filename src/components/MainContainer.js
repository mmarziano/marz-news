import React from 'react';
import Moment from 'react-moment';
import Navbar_Invert from './Navbar_Invert'
import { connect } from 'react-redux'
import SearchContainer from './SearchContainer'
import Loading from '../components/Loading'

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPrefs: ['politics', 'entertainment', 'sports', 'business'],
        }
    }

    top5 = () => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(this.props.topHeadlines[i])
        }

        return top5articles.map((article, idx) =>  
            <img className='thumbnail' src={article.urlToImage} onClick={this.setFocus} id={idx} key={idx} alt=""/>
        )
    }

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
        if (this.props.loading) {
            return (<Loading />)
          }

        if (this.props.results.searchArticles !== null ) {
            return( 
                <div className="container-fluid col-lg-12">
                    <div className="row">
                        <Navbar_Invert topHeadlines={this.props.topHeadlines} activeArticle={this.state.active} top5={this.top5} userPrefs={this.state.userPrefs} showCarousel={this.state.showCarousel}/>
                    </div>
                    <div className="row main">
                        <SearchContainer results={this.props.searchResults}/>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }     
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchArticles,
        loading: state.searchArticles.loading,
        error: state.searchArticles.error
    }
}

export default connect(mapStateToProps)(MainContainer)



