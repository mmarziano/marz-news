import React from 'react';
import { connect } from 'react-redux'
import { fetchSearch } from '../actions/searchActions';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
        }
    }

    handleOpenSearch = () => {
        this.props.toggleSearch()
     }
 
    handleUserInput = (e) => {
        this.setState(
            { userInput: e.target.value },
            () => {return (this.state)}
          );
    }

    handleSearchSubmit = () => {
        this.props.fetchSearch(this.state.userInput)
    }

    render() {
        return(
            <li className="searchbar">
                <i className="fa fa-search" onClick={this.handleOpenSearch} aria-hidden="true"></i>
                <div className={this.props.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                        <input type="text" onChange={this.handleUserInput} placeholder="Search articles"/>
                        <input type="button" onClick={this.handleSearchSubmit} value="Search"/>
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