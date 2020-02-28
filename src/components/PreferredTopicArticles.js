import React from 'react';
import { connect } from 'react-redux'
import Moment from 'react-moment';
import {
    Redirect
  } from "react-router-dom";
import PageHeader from './PageHeader'
import Loading from './Loading'
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
        return this.props.searchArticles.map(result => 
            <Article result={result} />
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