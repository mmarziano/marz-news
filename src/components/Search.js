import React from 'react';


class Search extends React.Component {
    
    handleOpenSearch = () => {
        this.props.toggleSearch()
     }
 
    handleSearchSubmit = (e) => {
         console.log(e)
    }

    render() {
        return(
            <li className="searchbar">
                <i className="fa fa-search" onClick={this.handleOpenSearch} aria-hidden="true"></i>
                <div className={this.props.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                        <input type="text" placeholder="Search articles"/>
                        <input type="button" onClick={this.handleSearchSubmit} value="Search"/>
                </div>
            </li>
        )
    }
} 

export default Search