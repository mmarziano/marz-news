import React from 'react';

class Carousel extends React.Component {
    top5 = (props) => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(props[i])
        }
        return top5articles.map((article, idx) => <i className="fa fa-circle-o" id={idx}></i>)
    }


    render() {
        const { articles } = this.props.articles;

        if (this.props.articles === null) {
            return null
        } else {
            return(
                <div className="carousel col-md-6 text-center">
                    {this.top5({articles})}
                </div>
            )
        }  
    }
} 

export default Carousel