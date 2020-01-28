import React from 'react';
import { connect } from 'react-redux'
import { fetchSearch } from '../actions/searchActions';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: "",

        }
    }

    handleOpenSearch = () => {
        this.props.toggleSearch();
     }
 
    handleUserInput = (e) => {
        this.setState(
            { userInput: e.target.value },
            () => {return (this.state)}
          );
    }

    handleSearchSubmit = (e) => {
        e.preventDefault();
        alert('here')
        this.props.hideCarousel();
        this.setState(
            { userInput: '' },
            () => {return (this.state)}
          );
        this.props.toggleSearch();
    }

    render() {
        return(
            <li className="searchbar">
                <i className="fa fa-search" onClick={this.handleOpenSearch} aria-hidden="true"></i>
                <div className={this.props.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                    <form onSubmit={this.handleSearchSubmit}>
                        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Search articles"/>
                        <input className="search-button" type="submit" value="Submit" />
                    </form>
                </div>
            </li>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return  {
      fetchSearch: () => dispatch(fetchSearch()),
      }
    };

export default connect(null, mapDispatchToProps)(Search)