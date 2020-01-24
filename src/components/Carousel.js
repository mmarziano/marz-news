import React from 'react';

class Carousel extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          activeArticle : this.props.activeArticle,
        };
    }

    setActive = (id) => {
        console.log(id)
        console.log(this.props)
        this.setState({activeArticle: id},
        () => {this.returnActive()})
    }

    returnActive = () => {
        console.log(this.props.activeArticle)
    }

    // componentDidMount() {
    //     console.log(this.props)
    // }
    
    top5 = (props) => {
        let top5articles = [];
        for (let i = 0; i < 5; i++) {
            top5articles.push(props.articles[i])
        }
        return top5articles.map((article, idx) =>  
            <i className={this.props.activeArticle !== idx ? 'fa fa-circle-o' : 'fa fa-circle fa-active'} onClick={e => this.setActive(e.target.id)} id={idx} key={idx}></i>
        )
    }


    render() {
        const { articles } = this.props.articles;
  
        if (this.props.articles === null) {
            return null
        } else {
            return(
                <div className="carousel col-md-6 text-center">
                    {this.top5(this.props)}
                </div>
            )
        }  
    }
} 

export default Carousel