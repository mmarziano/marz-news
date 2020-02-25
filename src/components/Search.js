import React from 'react';
import { connect } from 'react-redux'
import Moment from 'react-moment';
import {
    Redirect
  } from "react-router-dom";
import PageHeader from './PageHeader'
import { fetchSearch } from '../actions/searchActions';


class Search extends React.Component {

    // renderResults = () => {
    //     return this.props.results.searchArticles.map(result => 
            
    //         <div className="column">
    //             <figure>
    //                 <div className="container-article">
    //                     <li className="card-article">
    //                         <img src={result.urlToImage} alt={result.title} />
    //                         <p id="author">{result.author}</p>
    //                         <p id="article-date"><Moment format="MM/DD/YYYY">
    //                             {result.publishedAt}
    //                         </Moment> </p>
    //                         <a href={result.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link" aria-hidden="true"></i> Link to Article</a>
    //                         <div className='article-overlay'>
    //                             <a href={result.url} target="_blank" rel="noopener noreferrer"><h3 className='headline'>{result.title}</h3></a>
    //                         </div>
    //                     </li>
    //                 </div>
    //             </figure>
    //         </div>
    //     )
    // }

        
    render() {
        if (this.state.isLoggedIn === false) {
            return <Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
        }
            return(
            <> 
            <div className="container-fluid">
                <div className={this.props.isLoggedIn ? "row" : " hidden"}>
                    <PageHeader pageheader="Top Headlines" currentUser={this.props.currentUser} />   
                </div>
                <div className="row col-md-12">
                    <div className="article">
                            <ul>
                                Hello
                                {/* {this.renderArticles()} */}
                            </ul>
                    </div>
                </div>
            </div>
            </>)
    }     
     
}

const mapStateToProps = state => {
    console.log(state)
    return {
        searchArticles: state.searchArticles.searchArticles,
        loading: state.searchArticles.loading,
        error: state.searchArticles.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchSearch: (input) => dispatch(fetchSearch(input))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)