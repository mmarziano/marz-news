import React from 'react';

class Carousel extends React.Component {
    top5 = (props) => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            {top5articles.push(props.articles[i])}
        }
        return top5articles
    }

    render() {
        return(
            <div className="carousel col-md-6 text-center">
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-circle-o"></i>
                        <i className="fa fa-circle-o"></i>
            </div>
        )
    }
} 

export default Carousel