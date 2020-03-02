import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux'
import SearchContainer from '../components/Search'
import TopHeadlines from './TopHeadlines'


class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPrefs: ['politics', 'entertainment', 'sports', 'business'],
        }
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

        // if (this.props.loading) {
        //     return (<Loading />)
        //   }

        if (this.props.searchArticles !== null ) {
            return( 
                <div className="container-fluid col-lg-12">
                    <div className="row main">
                        <SearchContainer results={this.props.searchResults}/>
                    </div>
                </div>
            )
        } 
        
        if (this.props.topHeadlines && this.props.searchArticles === null && this.props.hide === true) {
            return (
            <TopHeadlines topHeadlines={this.props.topHeadlines} active={this.props.active}/>)
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



