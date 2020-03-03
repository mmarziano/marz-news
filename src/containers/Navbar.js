import React from 'react';
import {
    Link
  } from "react-router-dom";
import history from '../components/History';
import { connect } from 'react-redux'
import  logo  from '../assets/images/marz-newslogo.png'
import { fetchSearch } from '../actions/searchActions';



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            clicked: false,
            userInput: '',
            showLogin: false,
            logout: false,
        }      
    }    

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

    redirect = (e) => {
        e.preventDefault();
        let location = {
            pathname: `/${e.target.innerHTML.toLowerCase()}`,
            state: { 
              currentUser: this.state.currentUser,
              isLoggedIn: this.state.isLoggedIn,
              topic: e.target.innerHTML.toLowerCase()
             }
          }
          history.push(location)
          this.props.fetchSearch(e.target.innerHTML, this.props.currentUser.preferences_language)
    }

    renderUserLinks = () => {
        if (this.props.currentUser !== undefined) {
            return this.props.currentUser.preferences_categories.map((p, idx) => 
                <li key={idx} onClick={this.redirect}>{p}</li>
                // <Link to={`/${p.toLowerCase()}`} key={p}>{p}</Link>
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

    toggleResponsiveNav = () => {
        var x = document.getElementById("navbar");
        if (x.className === "navbar-sticky") {
            x.className += " responsive";
        } else {
            x.className = "navbar-sticky";
        }
    }
    
    render() {
        return(
            <div className="container-fluid"> 
                    <div className="navbar-sticky" id="navbar">
                        <div className="row col-md-12">
                            <div className="col-md-4">
                                <a href="/"><img src={ logo } alt="Marz News Logo" className="logo" /></a>
                            </div>
                            <div className="col-md-8">
                                    <menu>
                                        <ul>
                                            <li><a href="javascript:void(0);" className="nav-icon" onclick={this.toggleResponsiveNav}><i class="fa fa-bars"></i></a></li>
                                            <li><i className="fas fa-sign-out-alt" onClick={this.toggleLogout}></i></li>
                                            {this.renderSignIn()}
                                            <li><Link to='/search'><i className={`fa fa-search${this.props.isLoggedIn ? "" : " hidden"}`} aria-hidden="true"></i></Link></li>
                                            <li className={this.props.isLoggedIn ? null : "hidden"}><Link to='/topheadlines'>Top Headlines</Link></li>
                                            {this.renderUserLinks()}
                                        </ul>
                                    </menu>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchSearch: (input, language) => dispatch(fetchSearch(input, language))
    }
};

export default connect(null, mapDispatchToProps)(Navbar)



