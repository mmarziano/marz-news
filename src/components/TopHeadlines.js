import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import { connect } from 'react-redux'
import MainContainer from './MainContainer'
import Navbar from './Navbar'

class TopHeadlines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            active: 0,
            isActive: false,
            showing: props.hide,
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
            return(
            <> 
            <Navbar setCurrentUser={this.props.setCurrentUser} currentUser={this.props.currentUser} updateCurrentUser={this.props.updateCurrentUser}/>    
            <div className="row hero">
                <HeroImage topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                <MainHeadline topHeadlines={topHeadlines} activeArticle={this.state.active} />
            </div>

            </>)
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

    