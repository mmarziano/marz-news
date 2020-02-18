import React from 'react';
import  detective  from '../assets/images/young-detective.png';
import Nav from 'react-bootstrap/Nav';
import Preferences from './Preferences';
import Navbar from './Navbar'



class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // currentUser: {
            //     id: props.currentUser.id, 
            //     oauthID: props.currentUser.oauthID,
            //     first_name: props.currentUser.first_name, 
            //     last_name: props.currentUser.last_name, 
            //     email: props.currentUser.email,
            //     profileImg: props.currentUser.profileImg,
            //     preferences: {
            //         selectedCategories: props.currentUser.preferences.selectedCategories,
            //         selectedLanguage: props.currentUser.preferences.selectedLanguage,
            //     },
            //     comments: [],
            //   },
            //   isLoggedIn: props.isLoggedIn,
              showPreferences: false,
              showComments: false,
              showArticles: false,
        }      
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
        console.log(this.props.location.state)
        return(
                <>
                <Navbar setCurrentUser={this.props.setCurrentUser}  currentUser={this.props.location.state.currentUser} />
                <div className="container-fluid profile-banner profile">
                    <div className="row col-md-12" >
                        <div className="col-md-6 text-center">
                            <img className="profile-img" src={this.props.location.state.profileImg} alt={this.props.location.state.currentUser.first_name} />
                            <h2>What's sparking your curiosity today, {this.props.location.state.currentUser.first_name}?</h2>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={ detective } alt="Young Detective" />
                        </div>
                    </div>
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
                        <Preferences currentUser={this.state.currentUser} updateCurrentUser={this.props.updateCurrentUser}/>
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