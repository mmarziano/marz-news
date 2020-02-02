import React from 'react';
import { connect } from 'react-redux'
import  logo  from '../assets/images/marz-newslogo.png'
import { fetchSearch } from '../actions/searchActions';
import { fetchFirstUserPreference } from "../actions/articleActions";
import { fetchSecondUserPreference } from "../actions/articleActions";
import { fetchThirdUserPreference } from "../actions/articleActions";


class Navbar extends React.Component {
       state = {
            clicked: false,
            userInput: '',
            defaultNav: ['Top Headlines', 'Finance', 'Sports', 'Politics'],
        }


    componentDidMount() {
        if (this.props.userPrefs !== undefined) {
            this.props.fetchFirstUserPreference(this.props.userPrefs[0]);
            this.props.fetchSecondUserPreference(this.props.userPrefs[1]);
            this.props.fetchThirdUserPreference(this.props.userPrefs[2])
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
            { userInput: '' }, () => {
            return (this.state)});
        this.toggleSearch();
        this.props.handleHideHeroImg();
        this.props.fetchSearch(this.state.userInput)
    }

    renderUserLinks = () => {
        if (this.props.userPrefs !== undefined) {
            return this.props.userPrefs.map(p => 
                <li>{p}</li>
            )
        } else {
            return this.state.defaultNav.map(p => 
                <li>{p}</li>
            )
        }
    }
    
    render() {
        return(
            <div className="container-fluid navbar sticky">
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <img src={ logo } alt="Marz News Logo" className="logo" />
                    </div>
                        <div className="col-md-8">
                            <menu className="right">
                                <ul>
                                    {this.renderUserLinks()}
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
                </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        firstPreferenceArticles: state.articles.firstUserPreferenceArticles,
        secondPreferenceArticles: state.articles.secondUserPreferenceArticles,
        thirdPreferenceArticles: state.articles.thirdUserPreferenceArticles
    }
}


const mapDispatchToProps = (dispatch) => {
    return  {
      fetchSearch: (input) => dispatch(fetchSearch(input)),
      fetchFirstUserPreference: (preference) => dispatch(fetchFirstUserPreference(preference)),
      fetchSecondUserPreference: (preference) => dispatch(fetchSecondUserPreference(preference)),
      fetchThirdUserPreference: (preference) => dispatch(fetchThirdUserPreference(preference)),
      }
    };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


