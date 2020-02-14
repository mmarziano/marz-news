import React from 'react';
import './App.css';
import './css/loading.css';
import './css/articles.css';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
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
          comments: [],
        },
        isLoggedIn: false,
        articles: [],
        active: 0,
        isActive: false,
        showing: true,
    }
    this.setFocus = this.setFocus.bind(this)
    this.top5 = this.top5.bind(this)
    this.handleHideHeroImg = this.handleHideHeroImg.bind(this)
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
        currentUser.comments = user.comments;                       
        return { currentUser } 
      }, () => {return (this.state)});
      this.setState(
        { isLoggedIn: true },
        () => {return (this.state)}
      );
    }
      console.log(this.state)
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

          if (topHeadlines !== null && this.state.isLoggedIn === false) {
            return (
            <>
                <Navbar handleHideHeroImg={this.handleHideHeroImg} setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
                <TopHeadlines topHeadlines={this.props.topHeadlines} active={this.state.active} searchArticles={this.props.searchArticles} hide={this.state.showing}/>
            </>
            );
          } else if (this.state.isLoggedIn) {
            return (
              <>
                <Navbar setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
                <Profile currentUser={this.state.currentUser}/>
              </>
              )
          } else {
            return null;
          }
          
          
          // else {
          //   return (
          //     <>
          //       <Navbar handleHideHeroImg={this.handleHideHeroImg} setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
          //       <div className={this.state.isLoggedIn ? "hidden" : null}>
          //           <MainContainer />
          //       </div>
          //       <div className={this.state.isLoggedIn ? null : 'hidden'}>
          //           <Profile />
          //       </div>
          //     </>
          //   );
          // } 
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))