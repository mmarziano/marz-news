import React from 'react';
import  detective  from '../assets/images/young-detective.png';

class PageHeader extends React.Component {

    render() {
        return(
        <div className="container-fluid profile-banner profile">        
            <div className="row col-md-12" >
                <div className="col-md-6 text-center">
                    <img className="profile-img" src={this.props.currentUser.profileImg} alt={this.props.currentUser.first_name} />
                    <h2>{this.props.pageheader}</h2>
                </div>
                <div className="col-md-6 text-center">
                    <img src={ detective } alt="Young Detective" />
                </div>
            </div>
        </div>
        )
    }
} 

export default PageHeader