import React from 'react';
import MainHeadline from '../components/MainHeadline'
import HeroImage from '../components/HeroImage'
import {
    Redirect,
  } from "react-router-dom";
import { connect } from 'react-redux'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            active: 0,
            isActive: false,
            showing: props.hide,
            isLoggedIn: props.isLoggedIn,
        }
        this.setFocus = this.setFocus.bind(this);
        this.top5 = this.top5.bind(this)
    }

    setFocus = (e) => {
        this.setState(
            { active: e.target.id, isActive: true },
            () => {return (this.state)}
          );
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

    render() {
        const { topHeadlines } = this.props;
        
        if (this.props.isLoggedIn) {
            return <Redirect
                        to={{
                        pathname: "/topheadlines",
                        state: { 
                            currentUser: this.props.currentUser, 
                            topHeadlines:  this.props.topHeadlines,
                            }
                        }}
                    />
        } 
    
        return(
            <div className={`${this.props.isLoggedIn ? " hidden" : "container-fluid"}`}>
                <div className='row hero'>
                    <HeroImage topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                    <MainHeadline topHeadlines={topHeadlines} activeArticle={this.state.active} />
                </div>
            </div>)
    }     
}

const mapStateToProps = state => {
    return {
        searchResults: state.searchArticles,
        loading: state.searchArticles.loading,
        error: state.searchArticles.error
    }
}

export default connect(mapStateToProps)(Home)