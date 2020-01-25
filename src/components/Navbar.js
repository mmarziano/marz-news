import React from 'react';
import Search from './Search'
import  logo  from '../assets/images/marz-newslogo.png'


export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.toggleSearch = this.toggleSearch.bind(this)
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
                                    <Search clicked={this.state.clicked} toggleSearch={this.toggleSearch} />
                                    <li><i className="fa fa-sign-in"></i></li>
                                </ul>
                            </menu>
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className="carousel col-md-4 text-center">
                            {this.props.top5()}
                        </div> 
                    </div>
                </div>
        )
    }
} 


