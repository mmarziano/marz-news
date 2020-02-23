import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Preferences from './Preferences';
import Navbar from './Navbar'
import Loading from './Loading'
import PageHeader from './PageHeader'
import {
    Redirect
  } from "react-router-dom";



class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: {
                id: null,
                oauthID: null,
                first_name: null, 
                last_name:  null,
                email: null,
                profileImg: null,
                preferences: {
                    selectedCategories: null,
                    selectedLanguage: null
                },
                comments: [],
              },
              isLoggedIn: true,
              showPreferences: false,
              showComments: false,
              showArticles: true,
        }      
    }

    componenttWillMount() {
        this.getUser();
    }

    getUser = () => {
        let url = 'http://localhost:3001/api/v1/profile/' + this.props.location.state.currentUser.id;
          fetch(url)
          .then(response => response.json())
          .then(json => {console.log(json)})
          .catch(error => console.log(error) );
    }

    // setUser = () => {
    //     let newState = Object.assign({}, this.state);
    //     newState.currentUser.id = this.props.location.state.currentUser.id;
    //     newState.currentUser.oauthID = this.props.location.state.currentUser.oauthID;
    //     newState.currentUser.first_name = this.props.location.state.currentUser.first_name;
    //     newState.currentUser.last_name = this.props.location.state.currentUser.last_name;
    //     newState.currentUser.email = this.props.location.state.currentUser.email;
    //     newState.currentUser.profileImg = this.props.location.state.currentUser.profileImg;
    //     newState.currentUser.preferences.selectedCategories = this.props.location.state.currentUser.preferences.selectedCategories;
    //     newState.currentUser.preferences.selectedLanguage = this.props.location.state.currentUser.preferences.selectedLanguage;
    //     this.setState(newState, () => {return (this.state)})
    // }

    updateCurrentUser = (user) => {
        this.setState(prevState => {
          let currentUser = { ...prevState.currentUser };  
          currentUser.preferences.selectedCategories = user.preferences_categories;
          currentUser.preferences.selectedLanguage = user.preferences_language;                     
          return { currentUser } 
        }, () => {console.log(this.state)});
    }

    saveUser = (categories, language) => {
            // Fetch request to update user based on selected preferences
            let url = 'http://localhost:3001/api/v1/profile/' + this.state.currentUser.id;
            let options = {
                method: 'PATCH', 
                headers: { 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify({
                    user: {
                        preferences_categories: categories,
                        preferences_language: language,
                    }})
                };
            fetch(url, options)
            .then(response => response.json())
            .then(json => {this.updateCurrentUser(json)})
            .catch(error => console.log(error) );
      }

    handleArticlesClick = (e) => {
        e.preventDefault();
            this.setState({
                showArticles: !this.state.showArticles,
            }, 
                () => {return (this.state)}
            )
        if (this.state.showPreferences) {
            this.setState({
                showPreferences: false,
            }, 
                () => {return (this.state)}
            )
        }
        if (this.state.showComments) {
            this.setState({
                showComments: false,
            }, 
                () => {return (this.state)}
            )
        }
      }

      handleCommentsClick = (e) => {
        e.preventDefault();
            this.setState({
                showComments: !this.state.showComments,
            }, 
                () => {return (this.state)}
            )
            if (this.state.showPreferences) {
                this.setState({
                    showPreferences: false,
                }, 
                    () => {return (this.state)}
                )
            }
            if (this.state.showArticles) {
                this.setState({
                    showArticles: false,
                }, 
                    () => {return (this.state)}
                )
            }
      }

      handlePreferencesClick = (e) => {
        e.preventDefault();
            this.setState({
                showPreferences: !this.state.showPreferences,
            }, 
                () => {return (this.state)}
            )
            if (this.state.showComments) {
                this.setState({
                    showComments: false,
                }, 
                    () => {return (this.state)}
                )
            }
            if (this.state.showArticles) {
                this.setState({
                    showArticles: false,
                }, 
                    () => {return (this.state)}
                )
            }
      }

    

    render() {
        if (this.props.currentUser.id === null) {
            return <Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
        }

            return(
                    <>
                    <PageHeader pageheader={`Looking good today, ${this.props.currentUser.first_name}`} currentUser={this.props.currentUser} />
                    <div className="container-fluid">
                        <div className="row col-md-12">
                            <Nav variant="tabs" defaultActiveKey="/Bookmarked">
                                <Nav.Item onClick={this.handleArticlesClick}>
                                    <Nav.Link href="/home">Bookmarked Articles</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={this.handleCommentsClick}>
                                    <Nav.Link eventKey="link-1">My Comments</Nav.Link>
                                </Nav.Item>
                                <Nav.Item onClick={this.handlePreferencesClick}>
                                    <Nav.Link href="#" eventKey="link-2">Preferences</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className={this.state.showPreferences ? "container-fluid" : "hidden"}>
                            <Preferences currentUser={this.props.currentUser} saveUser={this.saveUser} togglePreferences={this.handlePreferencesClick}/>
                        </div>
                        <div className={this.state.showComments ? "container-fluid" : "hidden"}>
                            Comments
                            
                        </div>
                        <div className={this.state.showArticles ? "container-fluid" : "hidden"}>
                            Articles
                            
                        </div>
                    </div>
                    </>
                 )
            } 
  }

export default Profile