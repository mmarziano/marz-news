import React from 'react';

class Carousel extends React.Component {
   top5 = (props) => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(props.articles[i])
        }
   
        return top5articles.map((article, idx) =>  
            <i className={this.props.activeArticle !== idx ? 'fa fa-circle-o' : 'fa fa-circle fa-active'} onClick={this.handleClick} id={idx} key={idx}></i>, this
        )
    }

    render() {
        const { articles } = this.props.articles;
  
        if (articles === null) {
            return null
        } else {
            return(
                <div className="carousel col-md-6 text-center">
                    {this.top5(this.props)}
                </div>
            )
        }  
    }

    handleClick = () => this.props.setFocus
} 

export default Carousel