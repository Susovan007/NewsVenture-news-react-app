import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="change" style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0}}>            
            <span class=" badge bg-danger">
                  {source}
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>            
            <p className="card-text">{description}...</p>
            
            <p className="card-text">
              <small className="text-muted">By: {author ? author : "unknown"} on{" "} {new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">
              Read More
            </a>
            {/* here target="_blank" redirects to new page */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
