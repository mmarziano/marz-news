import React from 'react'

export default class Bookmarked extends React.Component {

    render() {
            if (this.props.savedArticles.length > 1) {
                return this.props.savedArticles.map((bookmark, idx) =>
                    <div id={bookmark.a.url} className="row bookmark-card" key={idx}>
                            <div className="col-md-3">
                                <img src={bookmark.a.urlToImage} alt={bookmark.a.title} />
                            </div>
                            <div className="col-md-7">
                                <h2>{bookmark.a.title}</h2>
                                <p>{bookmark.a.content !== null ? bookmark.a.content.split('[').splice(0)[0] : bookmark.a.content}</p><span><a href={bookmark.a.url} target='_blank' rel="noopener noreferrer">Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.props.handleRemove(event, idx, bookmark.a.url)} className="btn btn-danger">Remove from list</button>
                            </div>
                    </div>
                )
         } else if (this.props.savedArticles.length === 1) {
            let article = this.props.savedArticles[0]
            return (
                    <div className="row bookmark-card" key='0'>
                            <div className="col-md-3">
                                <img src={article.a.urlToImage} alt={article.a.title} />
                            </div>
                            <div className="col-md-7">
                                <h2>{article.a.title}</h2>
                                <p>{article.a.content !== null ? article.a.content.split('[').splice(0)[0] : article.a.content}</p><span><a href={article.a.url} target='_blank' rel="noopener noreferrer">Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.props.handleRemove(event, 0, article.a.url)} className="btn btn-danger">Remove from list</button>
                            </div>
                    </div>
            )} else {
                return null
            }
    }
} 

