import React from 'react';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
  }

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                id: null,
                first_Name: null,
                last_Name: null,
                email: null,
                comments: [],
            },
            email: '',
            password: '',
            isLoggedIn: false,
            loginError: false,
            errors: null,
        }
    }

      
    setCurrentUser = (user) => {
        this.setState(prevState => {
          let currentUser = { ...prevState.currentUser };  
          currentUser.id = user.id;         
          currentUser.first_name = user.first_name;
          currentUser.last_name = user.last_name;
          currentUser.email = user.email;
          currentUser.comments = user.comments;                      
          return { currentUser }
        }, () => {return (this.state)});
        this.setState(
            { isLoggedIn: true },
            () => {console.log (this.state)}
          );
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
        let url = 'http://localhost:3001/api/v1/login';
        let options = {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
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
                () => {console.log (this.state)}
            )
        } else {
            this.setUser(response);
            this.setState(
                { isLoggedIn: true },
                () => {console.log (this.state)}
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
        return(
            <div className={this.state.loginSuccess ? "hidden" : "container-fluid"}>
                <div className="row">
                    <div className={this.state.loginError ? "error" : "hidden"}>
                        {this.renderErrorMsg(this.state.errors)}
                    </div>
                </div>
                <div className="row" id="login-page">
                    <div className="col-md-5 login-card">
                          <div className="col-md-6 offset-5">  
                            <h1 className="title">Welcome Back!</h1>
                            <span>Login to access your profile and preferences.</span><br/>
                            <form onSubmit={this.handleLoginSubmit}>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" placeholder="Email Address" onChange={this.handleEmailInput}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInput}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>
                            <GoogleLogin
                                clientId= {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Login


 