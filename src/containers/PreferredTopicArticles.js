import React from 'react';
import { connect } from 'react-redux'
import {
    Redirect
  } from "react-router-dom";
import PageHeader from '../components/PageHeader'
import Loading from '../components/Loading'
import Article from './Article'


class PreferredTopicArticles extends React.Component {
    constructor() {
        super();
        this.state = {
            topic: '',
        }      
    }    

    renderResults = () => {
        if (this.props.searchArticles) {
        return this.props.searchArticles.map((result, index) => 
            <Article result={result} index={index} saveArticle={this.props.saveArticle} saveComment={this.props.saveComment} articles={this.props.searchArticles}/>
           )
        }
    }

    render() {
        let string = this.props.topic
        let topic = string[0].toUpperCase() + string.slice(1) + " Articles"

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
                    <PageHeader pageheader={topic} currentUser={this.props.currentUser} />   
                </div>
                <div className="row col-md-12">
                        {this.renderResults()}
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


export default connect(mapStateToProps)(PreferredTopicArticles)