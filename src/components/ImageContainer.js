import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
        }
    }

    setFocus = () => {
        alert('here')
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
                <div className="row hero">
                        <Navbar articles={articles} activeArticle={this.state.active} setFocus={this.setFocus}/>
                        <HeroImage articles={articles} activeArticle={this.state.active}/>
                        <MainHeadline articles={articles} activeArticle={this.state.active}/>
                </div>
            </div>
        )     
        }     
    }
}


export default ImageContainer

    