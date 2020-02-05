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

    render() {
        return(
            <div className="container-fluid">
                <div className="row" id="login-page">
                    <div className="col-md-5 login-card">
                          <div className="col-md-6 offset-5">  
                            <h1 className="title">Welcome Back!</h1>
                            <span>Login to access your profile and preferences.</span>
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={this.handleEmailInput}/><br/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInput}/><br/>
                                </div>
                                <button type="submit" class="btn btn-primary">Login</button><br/>
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


 