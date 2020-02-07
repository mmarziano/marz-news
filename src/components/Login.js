import React from 'react';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
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

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
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
        // .then(this.handleErrors)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error) );
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row" id="login-page">
                    <div className="col-md-5 login-card">
                          <div className="col-md-6 offset-5">  
                            <h1 className="title">Welcome Back!</h1>
                            <span>Login to access your profile and preferences.</span>
                            <form onSubmit={this.handleLoginSubmit}>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={this.handleEmailInput}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInput}/>
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button>
                            </form>
                            <div class="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
  }

export default Login


 