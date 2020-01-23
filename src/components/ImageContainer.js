import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import { connect } from 'react-redux';
import { fetchTopHeadlines } from "./actions/articleActions";

class ImageContainer extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div className="container-fluid col-lg-12">
                <div className="row">
                        <HeroImage />
                        <MainHeadline />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        articles: state.articles,
    }
}

export default connect(mapStateToProps)(ImageContainer)

    