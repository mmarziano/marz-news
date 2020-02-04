import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './css/loading.css';
import './css/articles.css';
import { connect } from 'react-redux'
import Login from './components/Login'
import { fetchTopHeadlines } from "./actions/articleActions";
import MainContainer from './components/MainContainer'
import Loading from './components/Loading'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        articles: [],
        active: 0,
        isActive: false,
        showing: true,
    }
    this.setFocus = this.setFocus.bind(this)
    this.top5 = this.top5.bind(this)
    this.handleHideHeroImg = this.handleHideHeroImg.bind(this)
}
  
  
  componentDidMount() {
    this.props.fetchTopHeadlines();
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

    handleHideHeroImg = () => {
      this.setState(
          { showing: !this.state.showing },
          () => {return (this.state)}
        );
    }

  render() {
          const { error, loading, topHeadlines} = this.props;

          if (error) {
              return <div>Error! {error.message}</div>;
              }

          if (loading && topHeadlines === null) {
            return (<Loading />)
          }

          if (topHeadlines !== null) {
            return (
              <Router>
                <div>
                    <Switch>
                        <Route path="/:userPref1">
                          <MainContainer topHeadlines={this.props.topHeadlines} active={this.state.active}/>
                        </Route>
                        <Route path="/:userPref2">
                          <MainContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                        <Route path="/:userPref3">
                          <MainContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                        <Route path="/login">
                          <Login userPrefs={this.props.userPrefs}/>
                        </Route>
                        <Route path="/">
                          <MainContainer topHeadlines={this.props.topHeadlines} active={this.state.active} searchArticles={this.props.searchArticles}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            );
          } else {
            return null;
          }
      }
  }

const mapStateToProps = state => {
  
    return {
        userPrefs: state.topHeadlines.userPrefs,
        topHeadlines: state.topHeadlines.topHeadlines,
        searchArticles: state.searchArticles.searchArticles,
        loading: state.topHeadlines.loading,
        error: state.topHeadlines.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
      fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),
      }
    };

export default connect(mapStateToProps, mapDispatchToProps)(App)