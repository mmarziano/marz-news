import React from 'react';
import MainHeadline from './MainHeadline'
import HeroImage from './HeroImage'
import Navbar from './Navbar'

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0,
            isActive: false,
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

    top5 = () => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(this.props.articles[i])
        }

        return top5articles.map((article, idx) =>  
            <img className='thumbnail' src={article.urlToImage} onClick={this.setFocus} id={idx} key={idx} />
        )
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
                        <Navbar articles={articles} activeArticle={this.state.active} top5={this.top5}/>
                        <HeroImage articles={articles} activeArticle={this.state.active} top5={this.top5}/>
                        <MainHeadline articles={articles} activeArticle={this.state.active} />
                </div>
            </div>
        )     
      }     
    }
}


export default ImageContainer

    