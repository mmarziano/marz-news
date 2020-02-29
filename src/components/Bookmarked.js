import React from 'react'

export default class Bookmarked extends React.Component {
    
    toggleRemove = (e, idx, id) => {
        e.preventDefault();
        let element = document.getElementById(id)
        element.style.display = "none"
        this.props.handleRemove(e, idx)
    }

    render() {
            if (this.props.savedArticles.length > 1) {
                return this.props.savedArticles.map((bookmark, idx) =>
                    <div id={bookmark.url} className="row bookmark-card">
                            <div className="col-md-3">
                                <img src={bookmark.urlToImage} alt={bookmark.title} />
                            </div>
                            <div className="col-md-7">
                                <h2>{bookmark.title}</h2>
                                <p>{bookmark.content.split('[').splice(0)[0]}</p><span><a href={bookmark.url} target='_blank'>Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.toggleRemove(event, idx, bookmark.url)} className="btn btn-danger">Remove from list</button>
                            </div>
                    </div>
                )
         } else if (this.props.savedArticles.length === 1) {
            let article = this.props.savedArticles[0]
            return (
                    <div className="row bookmark-card">
                            <div className="col-md-3">
                                <img src={article.urlToImage} alt={article.title} />
                            </div>
                            <div className="col-md-7">
                                <h2>{article.title}</h2>
                                <p>{article.content.split('[').splice(0)[0]}</p><span><a href={article.url} target='_blank'>Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.props.handleRemove(event, 0)} className="btn btn-danger">Remove from list</button>
                            </div>
                    </div>
            )} else {
                return null
            }
    }
} 

