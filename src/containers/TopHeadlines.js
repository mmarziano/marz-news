import React from 'react';
import { connect } from 'react-redux'
import {
    Redirect
  } from "react-router-dom";
import PageHeader from '../components/PageHeader'
import Article from './Article'


class TopHeadlines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            active: 0,
            isActive: false,
            showing: props.hide,
            isLoggedIn: props.isLoggedIn,
        }
    }

    save = () => {
        alert('here')
    }

    renderArticles = () => {
        return this.props.topHeadlines.map((result, index) => 
            <Article result={result} key={index} index={index} saveArticle={this.props.saveArticle} saveComment={this.props.saveComment} articles={this.props.topHeadlines}/>
        )
    }

    render() {
  
        if (!this.props.isLoggedIn) {
            return <Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
        }
        if (this.props.topHeadlines) {
        return(
            <> 
                {this.props.isLoggedIn || this.props.location.state.isLoggedIn ? <PageHeader pageheader="Top Headlines" currentUser={this.props.currentUser} /> : null}   
                <div className="row col-md-12">
                    <div className="container-article">
                        <ul>
                            {this.renderArticles()}
                        </ul>
                    </div>
                </div>
        </>)
        }
    }     
}

const mapStateToProps = state => {
    return {
        topHeadlines: state.topHeadlines.topHeadlines,
        searchArticles: state.searchArticles.searchArticles,
        loading: state.topHeadlines.loading,
        error: state.topHeadlines.error
    }
}

export default connect(mapStateToProps)(TopHeadlines)

    