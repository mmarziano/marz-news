import React from 'react';
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap';
import { fetchSearch } from '../actions/searchActions';


class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
 
        }      
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
        this.props.fetchSearch(this.state.userInput, this.props.currentUser.preferences_language)
    }
        
    render() {
            return(
                <div >
                    <form className="search" onSubmit={this.handleSearchSubmit}>
                        <input type="text" value={this.state.userInput} onChange={this.handleUserInput} placeholder="Howdy! What would you like to search for?" />
                        <Button variant="primary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </form>
                </div>
  
            )
    }     
     
}

const mapStateToProps = state => {
    return {
        searchArticles: state.searchArticles.searchArticles,
        loading: state.searchArticles.loading,
        error: state.searchArticles.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchSearch: (input, language) => dispatch(fetchSearch(input, language))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
