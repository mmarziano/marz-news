import React from 'react';
import {
    Link,
    NavLink
  } from "react-router-dom";

import  logo  from '../assets/images/marz-newslogo.png'



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            defaultNav: ['Top Headlines'],
            clicked: false,
            userInput: '',
            showLogin: false,
            logout: false,
        }      
    }    

    // componentDidMount() {
    //     if (this.props.currentUser) {
    //         this.props.fetchFirstUserPreference(this.props.currentUser.preferences_categories[0]);
    //         this.props.fetchSecondUserPreference(this.props.currentUser.preferences_categories[1]);
    //         this.props.fetchThirdUserPreference(this.props.currentUser.preferences_categories[2])
    //     }
    // }

    toggleSearch = () => {
        this.setState(
            {clicked: !this.state.clicked },
            () => {return (this.state.clicked)}
          );
    }
    
    logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }
    
    handleUserInput = (e) => {
        this.setState(
            { userInput: e.target.value },
            () => {return (this.state)}
          );
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.setState(
            { userInput: '' }, () => {
            return (this.state)});
        this.toggleSearch();
        this.props.fetchSearch(this.state.userInput)
    }


    renderUserLinks = () => {
        if (this.props.currentUser !== undefined) {
            return this.props.currentUser.preferences_categories.map(p => 
                <li><Link to={p.toLowerCase()} key={p}>{p}</Link></li>
            )
        } 
    }

    renderSignIn = () => {
        if (this.props.currentUser === undefined) {
            return (
                <li><Link to="/login"><i className="fa fa-sign-in"></i></Link></li>
            )
        } else if (this.state.logout !== true) {
            let profile_url = "/profile/" + this.props.currentUser.id
            return (
            <>
                <li onClick={this.logout}>Logout</li>
                <li><Link to={profile_url}><i className="fa fa-user-circle"></i></Link></li>
            </>
            )
        } 
    }
    
    render() {
        return(
                <div className="container-fluid navbar sticky">
                    <div className="row col-md-12">
                        <div className="col-md-4">
                            <a href="/"><img src={ logo } alt="Marz News Logo" className="logo" /></a>
                        </div>
                        <div className="col-md-8">
                                <menu>
                                    <ul>
                                        <li><i className="fas fa-sign-out-alt" onClick={this.toggleLogout}></i></li>
                                        {this.renderSignIn()}
                                        <li><Link to='/search'><i className={`fa fa-search${this.props.isLoggedIn ? "" : " hidden"}`} aria-hidden="true"></i></Link></li>
                                        <li className={this.props.isLoggedIn ? "" : " hidden"}><Link to='/topheadlines'>Top Headlines</Link></li>
                                        {this.renderUserLinks()}
                                    </ul>
                                </menu>
                        </div>
                    </div>
                </div>
        )
    }
} 


export default Navbar


