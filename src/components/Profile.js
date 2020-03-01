import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Preferences from './Preferences';
import PageHeader from './PageHeader';
import Bookmarked from './Bookmarked';
import {
    Redirect
  } from "react-router-dom";



class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
              savedArticles: [],
              isLoggedIn: true,
              showPreferences: false,
              showComments: false,
              showArticles: true,
              toggleReady: true,
        }      
    }

    componentDidMount() {
        this.retrieveSavedArticles()
    }

    retrieveSavedArticles() {
        // Fetch request to retrieve user's bookmarked articles
        let url = 'http://localhost:3001/bookmarks/' + this.props.currentUser.id;
        fetch(url, {
            headers: {
              "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(response => response.json())
        .then(json => this.setState(
            { savedArticles: json },
            () => {return (this.state)}))
        .catch(error => console.log(error));
    }

    handleRemove = (e, idx) => {
        e.preventDefault();
        // Fetch request to remove bookmarked article from list
        let url = 'http://localhost:3001/bookmarks/' + idx + '/' + this.props.currentUser.id;
        fetch(url, {
            method: 'PUT',
            headers: {
              "Authorization" : `Bearer ${localStorage.getItem('token')}`
            },
            user_id: this.props.currentUser.id
          })
        .then(response => response.json())
        .then(json => this.retrieveSavedArticles())
        .catch(error => console.log(error));
    }

    saveUser = (categories, language) => {
            // Fetch request to update user based on selected preferences
            let url = 'http://localhost:3001/api/v1/profile/' + this.props.currentUser.id;
            let options = {
                method: 'PATCH', 
                headers: { 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }, 
                body: JSON.stringify({
                    user: {
                        preferences_categories: categories,
                        preferences_language: language,
                    }})
                };
            fetch(url, options)
            .then(response => response.json())
            .then(json => {this.props.updateCurrentUser(json)})
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
                             
                        </div>
                        <div className={this.state.showArticles ? "container-fluid" : "hidden"}>
                            <Bookmarked currentUser={this.props.currentUser} savedArticles={this.state.savedArticles} 
                            handleRemove={this.handleRemove} toggleReady={this.state.toggleReady}/>
                        </div>
                    </div>
                    </>
                 )
            } 
  }

export default Profile