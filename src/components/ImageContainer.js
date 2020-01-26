import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'
import MainContainer from './MainContainer'

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isActive: false,
            showing: true,
        }
        this.setFocus = this.setFocus.bind(this);
        this.top5 = this.top5.bind(this)
    }

    setFocus = (e) => {
        this.setState(
            { active: e.target.id, isActive: true },
            () => {return (this.state)}
          );
    }

    // handleHideHeroImg = () => {
    //     this.setState(
    //         { showing: !showing },
    //         () => {console.log (this.state.showing)}
    //       );
    // }

    top5 = () => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(this.props.topHeadlines[i])
        }

        return top5articles.map((article, idx) =>  
            <img className='thumbnail' src={article.urlToImage} onClick={this.setFocus} id={idx} key={idx} />
        )
    }

    render() {
        const { topHeadlines } = this.props;

        if (this.state.showing) {
            return(
            <div className="container-fluid col-lg-12">
                <div className="row hero">
                    <Navbar topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                    <HeroImage topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                    <MainHeadline topHeadlines={topHeadlines} activeArticle={this.state.active} />
                </div>
            </div>)
        } else {
            return(
            <div className="container-fluid col-lg-12">
                <div className="row hero">
                    <Navbar topHeadlines={topHeadlines} activeArticle={this.state.active} top5={this.top5}/>
                    <MainContainer />
                </div>
            </div>
            )
        }     
    }     
}


export default ImageContainer

    