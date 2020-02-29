import React from 'react'

export default class Bookmarked extends React.Component {
    
    
    render() {
        if (this.props.savedArticles) {
            return this.props.savedArticles.map(bookmark =>
                <div className="row bookmark-card">
                        <div className="col-md-4">
                            <img src={bookmark.urlToImage} alt={bookmark.title} />
                        </div>
                        <div className="col-md-6">
                            <h2>{bookmark.title}</h2>
                            <p>{bookmark.content}</p>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                </div>
            )
    }}
} 