import React from 'react';
import Search from './Search'
import { connect } from 'react-redux'
import  logo  from '../assets/images/marz-newslogo.png'
import { fetchSearch } from '../actions/searchActions';


class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            userInput: '',
            showCarousel: true,
        }
    }

    toggleSearch = () => {
        this.setState(
            {clicked: !this.state.clicked },
            () => {return (this.state.clicked)}
          );
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
            { showCarousel: false, userInput: '' },
            () => {return (this.state)}
          );
        console.log(this.state)
        this.toggleSearch();
        this.props.fetchSearch(this.state.userInput)
    }

    
    render() {
        return(
            <div className="container-fluid navbar">
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                        <div className="col-md-8">
                            <menu className="right">
                                <ul>
                                    <li>Top Headlines</li>
                                    <li>Politics</li>
                                    <li>Finance</li>
                                    <li>Sports</li>
                                    <li>Entertainment</li>
                                    <li className="searchbar">
                                        <i className="fa fa-search" onClick={this.toggleSearch} aria-hidden="true"></i>
                                        <div className={this.state.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                                            <form onSubmit={this.handleSearchSubmit}>
                                                <input type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Search articles"/>
                                                <input className="search-button" type="submit" value="Submit" />
                                            </form>
                                        </div>
                                    </li>
                                    <li><i className="fa fa-sign-in"></i></li>
                                </ul>
                            </menu>
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className={this.state.showCarousel === true ? "carousel col-md-4 text-center" : "carousel hidden col-md-4 text-center"}>
                            {this.props.top5()}
                        </div> 
                    </div>
                </div>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return  {
      fetchSearch: (input) => dispatch(fetchSearch(input)),
      }
    };

export default connect(null, mapDispatchToProps)(Navbar)


