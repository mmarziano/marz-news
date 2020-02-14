import React from 'react';
import  detective  from '../assets/images/young-detective.png';


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
        }      
    }

    render() {
        console.log(this.state)
        return(
            <div className="container-fluid profile-banner profile">
                <div className="row col-md-12" >
                    <div className="col-md-6 text-center">
                        <img className="profile-img" src={this.state.currentUser.profileImg} alt={this.state.currentUser.first_name} />
                        <h2>{this.state.currentUser.first_name} {this.state.currentUser.last_name}</h2>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={ detective } alt="Young Detective" />
                    </div>
                </div>
            </div>
        ); 
    }
  }

export default Profile