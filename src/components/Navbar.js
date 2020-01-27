import React from 'react';
import Search from './Search'
import  logo  from '../assets/images/marz-newslogo.png'
import { fetchSearch } from '../actions/searchActions';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.toggleSearch = this.toggleSearch.bind(this);
        this.handleHideCarousel = this.handleHideCarousel.bind(this);
    }

    toggleSearch = () => {
        this.setState(
            {clicked: !this.state.clicked },
            () => {return (this.state.clicked)}
          );
    }

    handleHideCarousel = () => {
        this.props.hideHeroImg();
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
                                    <Search clicked={this.state.clicked} toggleSearch={this.toggleSearch} hideCarousel={this.handleHideCarousel}/>
                                    <li><i className="fa fa-sign-in"></i></li>
                                </ul>
                            </menu>
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className={this.props.showCarousel === true ? "carousel col-md-4 text-center" : "carousel hidden col-md-4 text-center"}>
                            {this.props.top5()}
                        </div> 
                    </div>
                </div>
        )
    }
} 

export default Navbar

