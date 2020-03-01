import React from 'react'

export default class Bookmarked extends React.Component {

    render() {
            if (this.props.savedArticles.length > 1) {
                return this.props.savedArticles.map((bookmark, idx) =>
                    <div id={bookmark.url} className="row bookmark-card">
                            <div className="col-md-3">
                                <img src={bookmark.urlToImage} alt={bookmark.title} />
                            </div>
                            <div className="col-md-7">
                                <h2>{bookmark.title}</h2>
                                <p>{bookmark.content !== null ? bookmark.content.split('[').splice(0)[0] : bookmark.content}</p><span><a href={bookmark.url} target='_blank'>Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.props.handleRemove(event, idx, bookmark.url)} className="btn btn-danger">Remove from list</button>
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
                                <p>{article.content !== null ? article.content.split('[').splice(0)[0] : article.content}</p><span><a href={article.url} target='_blank'>Read more</a></span>
                            </div>
                            <div className="col-md-2">
                                <button onClick={(event) => this.props.handleRemove(event, 0, article.url)} className="btn btn-danger">Remove from list</button>
                            </div>
                    </div>
            )} else {
                return null
            }
    }
} 

