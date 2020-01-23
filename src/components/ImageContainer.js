import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import { connect } from 'react-redux';
import { fetchTopHeadlines } from "../actions/articleActions";


class ImageContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchTopHeadlines());
    }

    render() {
        const { error, loading, articles } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
            }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (articles === null) {
            return null;
        } else {
        return(
            <div className="container-fluid col-lg-12">
                <div className="row">
                        <HeroImage articles={this.props.articles}/>
                        <MainHeadline articles={this.props.articles}/>
                </div>
            </div>
        )     
        }     
    }
}

const mapStateToProps = state => {
    return {
        articles: state.topHeadlines.articles,
        loading: state.loading,
        error: state.error
    }
}



export default connect(mapStateToProps)(ImageContainer)

    