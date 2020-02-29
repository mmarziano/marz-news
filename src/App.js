import React from 'react';
import './App.css';
import './css/loading.css';
import './css/articles.css';
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";
import history from './components/History';
import { withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import { fetchTopHeadlines } from "./actions/articleActions";
import TopHeadlines from './components/TopHeadlines'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Loading from './components/Loading'
import Search from './components/Search'
import PreferredTopicArticles from './components/PreferredTopicArticles'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        currentUser: undefined,
        // currentUser: {
        //   id: null, 
        //   oauthID: null,
        //   first_name: null, 
        //   last_name: null, 
        //   email: null,
        //   profileImg: null,
        //   preferences: {
        //      selectedCategories: [],
        //      selectedLanguage: null,
        //   },
        //   comments: [],
        // },
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
    this.getUser();
  }

  getUser = () => {
    if(localStorage.getItem('token')){
      fetch('http://localhost:3001/api/v1/getuser', {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => response.json())
      .then(user => this.setState(
        { currentUser: user, isLoggedIn: true },
        () => {return (this.state)}))
      const location = {
        pathname: '/topheadlines',
        state: { 
          currentUser: this.state.currentUser,
          isLoggedIn: this.state.isLoggedIn,
         }
      }
      history.push(location)
    }
  }


  setCurrentUser = (response) => {
    if (response.user.email !== undefined && response.user.preferences_categories.length > 0) {
      this.setState(prevState => {
        let currentUser = { ...prevState.currentUser };  
        currentUser.id = response.user.id;  
        currentUser.oauthID = response.user.oauthID;       
        currentUser.first_name = response.user.first_name;
        currentUser.last_name = response.user.last_name;
        currentUser.email = response.user.email;
        currentUser.profileImg = response.user.profileImg;
        currentUser.preferences_categories = response.user.preferences_categories;
        currentUser.preferences_language = response.user.preferences_language;
        currentUser.comments = response.user.comments;                       
        return { currentUser } 
      }, () => {return (this.state)});
      this.setState(
        { isLoggedIn: true },
        () => {return (this.state)}
      );
    } else if (response.user.email !== undefined) {
      this.setState(prevState => {
        let currentUser = { ...prevState.currentUser };  
        currentUser.id = response.user.id;  
        currentUser.oauthID = response.user.oauthID;       
        currentUser.first_name = response.user.first_name;
        currentUser.last_name = response.user.last_name;
        currentUser.email = response.user.email;
        currentUser.profileImg = response.user.profileImg;
        currentUser.preferences_categories = [];
        currentUser.preferences_language = 'en';
        currentUser.comments = response.user.comments;                       
        return { currentUser } 
      }, () => {return (this.state)});
      this.setState(
        { isLoggedIn: true },
        () => {return (this.state)} 
      );
    }
  }

  updateCurrentUser = (user) => {
    this.setState(prevState => {
      let currentUser = { ...prevState.currentUser };  
      currentUser.preferences_categories = user.preferences_categories;
      currentUser.preferences_language = user.preferences_language;                     
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

    saveArticle = (idx, articles) => {
      let article = articles[idx]
      console.log(article)
        let url = 'http://localhost:3001/articles';
        let options = {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Origin': 'http://localhost:3000',
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON.stringify({
                article: {
                    author: article.author,
                    title:  article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content,
                    source: article.source.name,
                    user_id: this.state.currentUser.id
                }})
            };
        fetch(url, options)
        .then(response => response.json())
        .then(json => {console.log(json)})
        .catch(error => console.log(error) );
    }

  render() {
          const { error, loading, topHeadlines, searchArticles} = this.props;

          if (error) {
              return <div>Error! {error.message}</div>;
              }

          if (loading && topHeadlines === null) {
            return (<Loading heading={`Scanning Headlines...`}/>)
          }

          if (topHeadlines !== null) {
            return (
            <>
              <Navbar setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} updateCurrentUser={this.updateCurrentUser} isLoggedIn={this.state.isLoggedIn}/> 
              <Switch>
                  <Route exact path='/' component={() => <Home 
                      topHeadlines={this.props.topHeadlines}
                      active={this.state.active} 
                      searchArticles={this.props.searchArticles} 
                      setCurrentUser={this.setCurrentUser} 
                      currentUser={this.state.currentUser} 
                      updateCurrentUser={this.updateCurrentUser}
                      isLoggedIn={this.state.isLoggedIn}
                    />}/>
                  <Route exact path='/topheadlines' component={() => <TopHeadlines 
                      topHeadlines={this.props.topHeadlines}
                      searchArticles={this.props.searchArticles}
                      currentUser={this.state.currentUser} 
                      isLoggedIn={this.state.isLoggedIn}
                      saveArticle={this.saveArticle}
                    />}/>
                  <Route exact path='/profile/:id' component={() => <Profile currentUser={this.state.currentUser} 
                    setCurrentUser={this.setCurrentUser} updateCurrentUser={this.updateCurrentUser}/>} />  
                  <Route exact path='/signup' component={() => <Signup currentUser={this.state.currentUser} 
                    setCurrentUser={this.setCurrentUser} isLoggedIn={this.state.isLoggedIn}/>}/>
                  <Route exact path='/login' component={() => <Login currentUser={this.state.currentUser} 
                    setCurrentUser={this.setCurrentUser} isLoggedIn={this.state.isLoggedIn} 
                    topHeadlines={this.props.topHeadlines}
                    updateCurrentUser={this.updateCurrentUser}/>} /> 
                  <Route exact path='/search' component={() => <Search currentUser={this.state.currentUser} 
                  isLoggedIn={this.state.isLoggedIn} saveArticle={this.saveArticle} searchArticles={this.props.searchArticles}/> } />
                  <Route exact path='/:topic' component={(props) => <PreferredTopicArticles currentUser={this.state.currentUser} isLoggedIn={this.state.isLoggedIn} 
                  topic={props.location.state.topic} saveArticle={this.saveArticle} searchArticles={this.props.searchArticles}/>} />

                  <Route path='/' render={() => <div>404</div>}/>
              </Switch>
            </>
            );
          } else {
            return null;
          }
      }


  }

const mapStateToProps = state =>{
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