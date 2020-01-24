import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'



class ImageContainer extends React.Component {

    render() {
        const { error, loading, articles, activeArticle } = this.props;

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
                <div className="row hero">
                        <Navbar articles={articles} activeArticle={this.props.active}/>
                        <HeroImage articles={articles} activeArticle={this.props.active}/>
                        <MainHeadline articles={articles} activeArticle={this.props.active}/>
                </div>
            </div>
        )     
        }     
    }
}


export default ImageContainer

    