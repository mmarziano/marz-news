import React from 'react';
import {
    Redirect,
    Link
  } from "react-router-dom";
import GoogleLogin from 'react-google-login';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: props.isLoggedIn,
            loginError: false,
            errors: null,
        }
    }

    responseGoogle = (response) => {
        if (response.googleId !== undefined) {
            this.handleGoogleSubmit(response);
        }
      }

      handleGoogleSubmit = (response) => {
        let url = 'https://marz-news-backend.herokuapp.com/api/v1/googleAuth';
        let options = {
            method: 'POST', 
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
            body: JSON.stringify({
                user: {
                    first_name: response.profileObj.givenName,
                    last_name: response.profileObj.familyName,
                    password: response.googleId + response.profileObj.email,
                    email: response.profileObj.email,
                    oauthID: response.googleId,
                    profileImg: response.profileObj.imageUrl,
                }})
            };
        fetch(url, options)
        .then(response => response.json())
        .then(json => {this.handleResponse(json)})
        .catch(error => console.log(error) );
    } 


    handleEmailInput = (e) => {
        this.setState(
            { email: e.target.value },
            () => {return (this.state)}
          );
    }

    handlePasswordInput = (e) => {
        this.setState(
            { password: e.target.value },
            () => {return (this.state)}
          );
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        let url = 'https://marz-news-backend.herokuapp.com/api/v1/login';
        let options = {
            method: 'POST', 
            mode: 'no-cors',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
            }, 
            body: JSON.stringify({
                user: {
                    email: this.state.email,
                    password: this.state.password
                }})
            };
        fetch(url, options)
        .then(response => response.json())
        .then(json => this.handleResponse(json))
        .catch(error => console.log(error) );
    }

    handleResponse = (response) => {
        if (response.message !== undefined) {
            this.setState({loginError: true, errors: response.message}, 
                () => {return (this.state)}
            )
        } else if (response.error) {
            this.setState({loginError: true, errors: response.error}, 
                () => {return (this.state)}
            )
        } else {
            localStorage.setItem('token', response.token);
            this.setUser(response);
            this.setState(
                { isLoggedIn: true },
                () => {return (this.state)}
              );
        }
        
    }

    setUser = (response) => {
        this.props.setCurrentUser(response)
    }
    
    renderErrorMsg = (errors) => {
        if (errors !== null) {
            return (
                    <li>{errors}</li>
            )
        };
    }


    render() {
        if (this.state.isLoggedIn) {
            return <Redirect
                        to={{
                        pathname: "/topheadlines",
                        state: { 
                            currentUser: this.props.currentUser, 
                            topHeadlines:  this.props.topHeadlines,
                            }
                        }}
                    />
        } 
            return(
                <>
                <div className={this.state.isLoggedIn ? "hidden" : "container-fluid"}>
                    <div className="row">
                        <div className={this.state.loginError ? "error" : "hidden"}>
                            {this.renderErrorMsg(this.state.errors)}
                        </div>
                    </div>
                    <div className="row" id="login-page">
                        <div className="col-md-5 login-card">
                            <div className="col-md-6 offset-5">
                                <h1 className="title">Welcome!</h1>
                                <span>Login to access your profile and preferences.</span><br/>
                            </div>
                            <div className="col-md-6 offset-5 text-center">  
                                <form onSubmit={this.handleLoginSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" onChange={this.handleEmailInput}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInput}/>
                                    </div>
                                    <button type="submit" className="btn btn-primary login">Login</button>
                                </form>
                                <hr />
                                <div id="google">
                                    <GoogleLogin
                                            clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                            buttonText="Login with Google"
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                            />
                                </div>
                                <hr />
                                <div><Link to="/signup">Create Free Account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login


 