import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class MainContainer extends React.Component {
    

    renderResults = () => {
        return this.props.searchResults.searchArticles.map(result => 
            <li><p>{result.title}</p></li>
        )
    }

    render() {
        if (this.props.searchResults.searchArticles !== null ) {
            return( 
                <div>
                    {this.renderResults()}
                </div>
            )
        } else {
            return null;
        }
    }     
}



export default MainContainer

    