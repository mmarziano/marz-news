import React from 'react';
import './App.css';
import './css/loading.css';
import './css/articles.css';
import { connect } from 'react-redux'
import {
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import { fetchTopHeadlines } from "./actions/articleActions";
import TopHeadlines from './components/TopHeadlines'
import MainContainer from './components/MainContainer'
import Profile from './components/Profile'
import Loading from './components/Loading'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
        currentUser: {
          id: null, 
          oauthID: null,
          first_name: null, 
          last_name: null, 
          email: null,
          profileImg: null,
          preferences: {
             selectedCategories: [],
             selectedLanguage: null,
          },
          comments: [],
        },
        isLoggedIn: false,
        articles: [],
        active: 0,
        isActive: false,
    }
    this.setFocus = this.setFocus.bind(this)
    this.top5 = this.top5.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
}
  
  
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }

  setCurrentUser = (user) => {
    if (user.email !== undefined) {
      this.setState(prevState => {
        let currentUser = { ...prevState.currentUser };  
        currentUser.id = user.id;  
        currentUser.oauthID = user.oauthID;       
        currentUser.first_name = user.first_name;
        currentUser.last_name = user.last_name;
        currentUser.email = user.email;
        currentUser.profileImg = user.profileImg;
        currentUser.preferences.selectedCategories = [];
        currentUser.preferences.selectedLanguage = 'en';
        currentUser.comments = user.comments;                       
        return { currentUser } 
      }, () => {return (this.state)});
      this.setState(
        { isLoggedIn: true },
        () => {return (this.state)}
      );
    }
  }

  updateCurrentUser = (categories, language) => {
    this.setState(prevState => {
      let currentUser = { ...prevState.currentUser };  
      currentUser.preferences.selectedCategories = categories;
      currentUser.preferences.selectedLanguage = language;                     
      return { currentUser } 
    }, () => {return (this.state)});

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
          const { error, loading, topHeadlines} = this.props;

          if (error) {
              return <div>Error! {error.message}</div>;
              }

          if (loading && topHeadlines === null) {
            return (<Loading />)
          }

          if (topHeadlines !== null) {
            return (
            <>
            <Switch>
                <Route exact path='/' component={() => <TopHeadlines 
                    topHeadlines={this.props.topHeadlines}
                    active={this.state.active} 
                    searchArticles={this.props.searchArticles} 
                    setCurrentUser={this.setCurrentUser} 
                    currentUser={this.state.currentUser} 
                    updateCurrentUser={this.updateCurrentUser}/>}/>
                <Route path='/profile/:id' component={Profile} />
                <Route exact path='/signup' component={() => <Signup currentUser={this.state.currentUser} 
                  setCurrentUser={this.setCurrentUser} isLoggedIn={this.state.isLoggedIn}/>}/>
                <Route exact path='/login' component={() => <Login currentUser={this.state.currentUser} 
                  setCurrentUser={this.setCurrentUser} isLoggedIn={this.state.isLoggedIn} updateCurrentUser={this.updateCurrentUser}/>} /> 
                <Route path='/' render={() => <div>404</div>}/>
            </Switch>
            </>
            );
          } else if (this.state.isLoggedIn ) {
            return (
                <Profile 
                  currentUser={this.state.currentUser} 
                  updateCurrentUser={this.updateCurrentUser}
                  setCurrentUser={this.setCurrentUser}
                  />
              )
          } else {
            return null;
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

const mapDispatchToProps = (dispatch) => {
    return  {
      fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),

      }
    };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))