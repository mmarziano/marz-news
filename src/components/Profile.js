import React from 'react';
import  detective  from '../assets/images/young-detective.png';
import Nav from 'react-bootstrap/Nav';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                id: props.currentUser.id, 
                oauthID: props.currentUser.oauthID,
                first_name: props.currentUser.first_name, 
                last_name: props.currentUser.last_name, 
                email: props.currentUser.email,
                profileImg: props.currentUser.profileImg,
                comments: [],
              },
              isLoggedIn: props.isLoggedIn,
              showPreferences: false,
              showComments: false,
              showArticles: false,
        }      
    }

    handlePreferencesClick = () => {
        this.setState({showPreferences: !this.state.showPreferences}, 
            () => {return (this.state)}
        )
      }

    render() {
        return(
            <div className="container-fluid profile-banner profile">
                <div className="row col-md-12" >
                    <div className="col-md-6 text-center">
                        <img className="profile-img" src={this.state.currentUser.profileImg} alt={this.state.currentUser.first_name} />
                        <h2>What's sparking your curiosity today, {this.state.currentUser.first_name}?</h2>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={ detective } alt="Young Detective" />
                    </div>
                </div>
                <div className="row col-md-12">
                    <Nav variant="tabs" defaultActiveKey="/Bookmarked">
                        <Nav.Item>
                            <Nav.Link href="/home">Bookmarked Articles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">My Comments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item onClick={this.handlePreferencesClick}>
                            <Nav.Link href="#preferences" eventKey="link-2">Preferences</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <div className={this.state.showPreferences ? null : "hidden"}>
                    <Preferences />
                </div>
            </div>
        ); 
    }
  }

export default Profile