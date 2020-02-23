import React from 'react';
import {
    Link,
  } from "react-router-dom";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import  logo  from '../assets/images/marz-newslogo.png'
import { fetchSearch } from '../actions/searchActions';
import { fetchFirstUserPreference } from "../actions/articleActions";
import { fetchSecondUserPreference } from "../actions/articleActions";
import { fetchThirdUserPreference } from "../actions/articleActions";


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                id: this.props.currentUser.id,
                oauthID: this.props.currentUser.oauthID,
                first_name: this.props.currentUser.first_name, 
                last_name:  this.props.currentUser.last_name,
                email: this.props.currentUser.email,
                profileImg: this.props.currentUser.profileImg,
                preferences: {
                    selectedCategories: this.props.currentUser.preferences.selectedCategories,
                    selectedLanguage: this.props.currentUser.preferences.selectedLanguage
                },
                comments: [],
              },
              isLoggedIn: false,
              defaultNav: ['Top Headlines'],
              clicked: false,
              userInput: '',
              showLogin: false,
              logout: false,
        }      
    }    

    componentDidMount() {
        if (this.props.userPrefs !== undefined) {
            this.props.fetchFirstUserPreference(this.props.userPrefs[0]);
            this.props.fetchSecondUserPreference(this.props.userPrefs[1]);
            this.props.fetchThirdUserPreference(this.props.userPrefs[2])
        }
    }

    // toggleLogin = () => {
    //     this.setState(
    //         { showLogin: !this.state.showLogin }, () => {
    //         return (this.state)});
    // }

    toggleSearch = () => {
        this.setState(
            {clicked: !this.state.clicked },
            () => {return (this.state.clicked)}
          );
    }
    
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    
    handleUserInput = (e) => {
        this.setState(
            { userInput: e.target.value },
            () => {return (this.state)}
          );
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.setState(
            { userInput: '' }, () => {
            return (this.state)});
        this.toggleSearch();
        this.props.fetchSearch(this.state.userInput)
    }

    renderUserLinks = () => {
        if (this.props.currentUser.email !== null) {
            return this.state.currentUser.preferences.selectedCategories.map(p => 
                <li key={p}>{p}</li>
            )
        } else {
            return this.state.defaultNav.map(p => 
                <li key={p}>{p}</li>
            )
        }
    }

    renderSignIn = () => {
        let profile_url = "/profile/" + this.props.currentUser.id
        if (this.props.currentUser.email === null) {
            return (
                <li><Link to="/login"><i className="fa fa-sign-in"></i></Link></li>
            )
        } else if (this.state.logout !== true) {
            return (
            <>
                <li onClick={this.logout}>Logout</li>
                <li><Link to={profile_url}><i className="fa fa-user-circle"></i></Link></li>
            </>
            )
        } 
    }
    
    render() {
        return(
                <div className="container-fluid navbar sticky">
                    <div className="row col-md-12">
                        <div className="col-md-4">
                            <a href="/"><img src={ logo } alt="Marz News Logo" className="logo" /></a>
                        </div>
                        <div className="col-md-8">
                                <menu>
                                    <ul>
                                        <li><i className="fas fa-sign-out-alt" onClick={this.toggleLogout}></i></li>
                                        {this.renderSignIn()}
                                        <li className="searchbar">
                                            <i className="fa fa-search" onClick={this.toggleSearch} aria-hidden="true"></i>
                                            <div className={this.state.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                                                <form onSubmit={this.handleSearchSubmit}>
                                                    <input type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Search articles"/>
                                                    <input className="search-button" type="submit" value="Submit" />
                                                </form>
                                            </div>
                                        </li>
                                        {this.renderUserLinks()}
                                    </ul>
                                </menu>
                        </div>
                    </div>
                </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        firstPreferenceArticles: state.articles.firstUserPreferenceArticles,
        secondPreferenceArticles: state.articles.secondUserPreferenceArticles,
        thirdPreferenceArticles: state.articles.thirdUserPreferenceArticles
    }
}


const mapDispatchToProps = (dispatch) => {
    return  {
      fetchSearch: (input) => dispatch(fetchSearch(input)),
      fetchFirstUserPreference: (preference) => dispatch(fetchFirstUserPreference(preference)),
      fetchSecondUserPreference: (preference) => dispatch(fetchSecondUserPreference(preference)),
      fetchThirdUserPreference: (preference) => dispatch(fetchThirdUserPreference(preference)),
      }
    };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))


