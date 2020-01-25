import React from 'react';
import  logo  from '../assets/images/marz-newslogo.png'


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.toggleSearch = this.toggleSearch.bind(this)
    }

    handleOpenSearch = () => {
       this.toggleSearch()
    }

    handleSearchSubmit = (e) => {
        console.log(e)
        this.props.fetchSearch(e.target.value)
     }

    toggleSearch = () => {
        this.setState(
            { clicked: !this.state.clicked },
            () => {return (this.state)}
          );
    }
    
    render() {
        const { articles } = this.props;
    
        return(
            
            <div className="container-fluid navbar">
                <div className="row col-md-12">
                    <div className="col-md-3">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                    <div className="carousel col-md-6 text-center">
                        {this.props.top5()}
                    </div> 
                    <div className="col-md-3">
                        <menu className="right">
                            <ul>
                                <li>Top Headlines</li>
                                <li className="searchbar">
                                    <i className="fa fa-search" onClick={this.handleOpenSearch} aria-hidden="true"></i>
                                    <div className={this.state.clicked !== true ? "togglesearch" : "togglesearch-clicked"}>
                                            <input type="text" placeholder="Search articles"/>
                                            <input type="button" onClick={this.handleSearchSubmit} value="Search"/>
                                    </div>
                                </li>
                                <li><i className="fa fa-sign-in"></i></li>
                            </ul>
                        </menu>
                    </div>
                </div>
            </div>
        )
    }
} 


