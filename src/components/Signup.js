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
            passwordConfirmed: false,
            signupError: false,
            errors: [],
            preferences: [],
        }
    }

    toggleError = () => {
        this.setState({signupError: false}, 
            () => {return (this.state)}
        )
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
                () => {console.log (this.state)}
            )
        } else {
            this.setState({passwordConfirmed: false}, 
                () => {console.log (this.state)}
            )
        }
    }

    handleSignupSubmit = (e) => {
        e.preventDefault();
        if (this.state.signupError === true) {
            this.toggleError();
        }
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
                }})
            };
        fetch(url, options)
        // .then(this.handleErrors)
        .then(response => response.json())
        .then(json => {this.handleResponse(json)})
        .catch(error => console.log(error) );
    }

    handleResponse = (response) => {
        if (response.errors !== null) {
        this.setState(
            { signupError: true, errors: response.errors }, () => {
            return (this.state)});
        } else {
            return (response)
        }

    }

    renderErrorMsg = (errors) => {
        if (errors !== undefined) {
        return (
                errors.map(e => 
                    <li>{e}</li>
                )
        )};
    }

    render() {
        return(
            <div className="container-fluid">
                <div className={`row ${this.state.signupError ? "error" : "hidden"}`}>
                        {this.renderErrorMsg(this.state.errors)}
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
        ); 
    }
  }

export default Signup


 