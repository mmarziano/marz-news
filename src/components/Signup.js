import React from 'react';


class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            preferences: [],
        }
    }

    updateFields = (event) => {
        this.setState({[event.target.name]: event.target.value}, 
            () => {return (this.state)}
        )
      }
    

    handleErrors = (response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    handleSignupSubmit = (e) => {
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
                    <div className="col-md-5 signup-card">
                          <div className="col-md-6 offset-5">  
                            <h1 className="title">Create Your Account</h1>
                            <form onSubmit={this.handleSignupSubmit}>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="firstName" placeholder="First Name" onChange={this.updateFields}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="lastName" placeholder="Last Name" onChange={this.updateFields}/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" name="email" placeholder="Email Address" onChange={this.updateFields}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="password" placeholder="Password" onChange={this.updateFields}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.updateFields}/><br/>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Signup</button>
                            </form>
                            <div class="g-signin2" data-onsuccess="onSignIn"></div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
  }

export default Signup


 