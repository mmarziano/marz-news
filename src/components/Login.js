import React from 'react';
import Navbar from './Navbar'

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
            <div className="container-fluid col-lg-12">
                <div className="row" id="login-page">
                    <div className="col-md-4 offset-4 login-card">
                        <h1 className="title">Sign In</h1>
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email Address" onChange={this.handleEmailInput}/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.handlePasswordInput}/>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        ); 
    }
  }

export default Login


 