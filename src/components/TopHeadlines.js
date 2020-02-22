import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import { connect } from 'react-redux'
import {
    Redirect
  } from "react-router-dom";
import PageHeader from './PageHeader'
import Navbar from './Navbar'

class TopHeadlines extends React.Component {
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

        if (!this.state.isLoggedIn) {
            return <Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
        }
            return(
            <> 
            <div className="container-fluid">
                <div className={`row${this.props.isLoggedIn ? " hero" : " hidden"}`}>
                    <PageHeader pageheader="Top Headlines" currentUser={this.props.currentUser} />   
                </div>
              
                <div className={this.props.isLoggedIn ? " hidden" : "row"}>
                    <HeroImage topHeadlines={this.props.topHeadlines} activeArticle={this.state.active} top5={this.top5}/> 
                    <MainHeadline topHeadlines={this.props.topHeadlines} activeArticle={this.state.active} />
                </div>  
            </div>
            </>)
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

    