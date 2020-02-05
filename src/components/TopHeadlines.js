import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'
import { connect } from 'react-redux'
import MainContainer from './MainContainer'

class TopHeadlines extends React.Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            active: 0,
            isActive: false,
            showing: true,
        }
        this.setFocus = this.setFocus.bind(this);
        this.top5 = this.top5.bind(this)
        this.handleHideHeroImg = this.handleHideHeroImg.bind(this)
    }

    setFocus = (e) => {
        this.setState(
            { active: e.target.id, isActive: true },
            () => {return (this.state)}
          );
    }

    handleHideHeroImg = () => {
        this.setState(
            { showing: !this.state.showing },
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
        const { topHeadlines, searchResults } = this.props;

        if (this.state.showing) {
            return(
            <>
                <div className="container-fluid col-lg-12">
                    <div className="row hero">
                        <HeroImage topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                        <MainHeadline topHeadlines={topHeadlines} activeArticle={this.state.active} />
                    </div>
                </div>
            </>)
        } else {
            return(
                <MainContainer results={this.props.searchResults} topHeadlines={topHeadlines}/>
            )
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

export default connect(mapStateToProps)(TopHeadlines)

    