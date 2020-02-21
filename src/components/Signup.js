import React from 'react';
import Navbar from './Navbar'
import {
    Redirect,
    Link
  } from "react-router-dom";

class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            passwordConfirmed: false,
            signupSuccess: false,
            signupError: false,
            errors: [],
            preferences: [],
        }
    }

    updateFields = (event) => {
        this.setState({[event.target.name]: event.target.value}, 
            () => {return (this.state)}
        )
      }

    confirmPassword = (event) => {
        this.setState({[event.target.name]: event.target.value}, 
            () => {this.validatePassword(this.state)}
        )
    }

    validatePassword = (state) => {
        if (state.password === state.passwordConfirmation) {
            this.setState({passwordConfirmed: !this.state.passwordConfirmed}, 
                () => {return (this.state)}
            )
        } else {
            this.setState({passwordConfirmed: false}, 
                () => {return (this.state)}
            )
        }
    }

    handleSignupSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:3001/api/v1/signup';
        let options = {
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                user: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    profileImg: 'https://api.adorable.io/avatars/100/' + this.state.firstName + 'lol@adorable.io.png'
                }})
            };
        fetch(url, options)
        .then(response => response.json())
        .then(json => {this.handleResponse(json)})
        .catch(error => console.log(error) );
    }

    handleResponse = (response) => {
        if (response.errors !== undefined) {
            this.setState({signupError: true, errors: response.errors}, 
                () => {return (this.state)}
            )
        } else {
            this.setUser(response);
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirmation: '',
                passwordConfirmed: false,
                signupSuccess: true,
                signupError: false,
                errors: [], 
            }, () => {
                console.log(this.state)});
        }
    }

    setUser = (response) => {
        this.props.setCurrentUser(response)
    }

    renderErrorMsg = (errors) => {
        if (errors !== undefined) {
            return (
                    errors.map(e => <li>{e}</li>)
            )};
    }

    render() {
        console.log(this.state)
        if (this.state.signupSuccess) {
            return <Redirect
                        to={{
                        pathname: "/profile/" + this.props.currentUser.id,
                        state: { currentUser: this.props.currentUser }
                        }}
                    />
        } 

        return(
            <>
            <Navbar currentUser={this.props.currentUser} />
            <div className={this.state.signupSuccess ? "hidden" : "container-fluid"}>
                <div className="row">
                    <div className={this.state.signupError ? "error" : "hidden"}>
                        {this.renderErrorMsg(this.state.errors)}
                    </div>
                </div>
                <div className="row" id="login-page">
                    <div className="col-md-5 signup-card">
                          <div className="col-md-6 offset-5">  
                          <br/>
                            <h1 className="title">Create Your Account</h1><br/>
                            <form onSubmit={this.handleSignupSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={this.updateFields}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={this.updateFields}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" onChange={this.updateFields}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={`form-control${this.state.passwordConfirmed ? "-confirmed" : ""}`} name="password" placeholder="Password" onChange={this.updateFields}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={`form-control${this.state.passwordConfirmed === true ? "-confirmed" : ""}`} name="passwordConfirmation" placeholder="Confirm Password" onChange={this.confirmPassword}/><br/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ); 
    }
  }

export default Signup


 