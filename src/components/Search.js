import React from 'react';
import { connect } from 'react-redux'
import {
    Redirect
  } from "react-router-dom";
import PageHeader from './PageHeader'
import Loading from './Loading'
import Article from './Article'


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
        }      
    }    

    renderResults = () => {
        if (this.props.searchArticles) {
        return this.props.searchArticles.map((result, idx) => 
            <Article result={result} saveArticle={this.props.saveArticle} saveComment={this.props.saveComment} />
           )
        }
    }

    render() {
        if (!this.props.isLoggedIn) {
            return <Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
        }

        if (this.props.loading) {
            return (<Loading heading={`Returning Search Items...`}/>)
        }

            return(
            <> 
            <div className="container-fluid">
                <div className={this.props.isLoggedIn ? "row" : " hidden"}>
                    <PageHeader pageheader="Search" currentUser={this.props.currentUser} />   
                </div>
                <div className="row col-md-12">
                    <ul>
                        {this.renderResults()}
                    </ul>
                </div>
            </div>
            </>)
    }     
     
}

const mapStateToProps = state => {
    return {
        searchArticles: state.searchArticles.searchArticles,
        loading: state.searchArticles.loading,
        error: state.searchArticles.error
    }
}


export default connect(mapStateToProps)(Search)