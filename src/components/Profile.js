import React from 'react';


class Profile extends React.Component {
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
                return (this.state)});
        }
    }

    renderErrorMsg = (errors) => {
        if (errors !== undefined) {
            return (
                    errors.map(e => <li>{e}</li>)
            )};
    }

    render() {
        return(
            <div className={this.state.signupSuccess ? "hidden" : "container-fluid"}>
                <div className="row" id="login-page">
                    Hello!
                </div>
            </div>
        ); 
    }
  }

export default Profile