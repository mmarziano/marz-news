import React from 'react';
import  detective  from '../assets/images/young-detective.png';
import SearchInput from './SearchInput'

class PageHeader extends React.Component {

    render() {
        if (this.props.pageheader === 'Search') {
            return(
            <div className="container-fluid profile-banner profile">        
                <div className="row col-md-12" >
                    <div className="col-md-8 text-center">
                        <img className="profile-img" src={this.props.currentUser.profileImg} alt={this.props.currentUser.first_name} />
                        <h2>{this.props.heading}</h2>
                        <SearchInput />
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={ detective } alt="Young Detective" />
                    </div>
                </div>
            </div>
            )
        } else {
            return(
                <div className="container-fluid profile-banner profile">        
                    <div className="row col-md-12" >
                        <div className="col-md-8 text-center">
                            <img className="profile-img" src={this.props.currentUser.profileImg} alt={this.props.currentUser.first_name} />
                            <h2>{this.props.pageheader}</h2>
                        </div>
                        <div className="col-md-4 text-center">
                            <img src={ detective } alt="Young Detective" />
                        </div>
                    </div>
                </div>
                )
        }
    }
} 

export default PageHeader