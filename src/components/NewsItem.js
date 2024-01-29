import React from 'react'
import imgNA from './Image_not_available.png'
const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;

    // const sources = articles.map((course) => <li>{course}</li>);

    return (
      <div>
        <div className="card my-3">

          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-success">{author}</span>
          </div>
          <img src={!imageUrl ? `${imgNA}` : imageUrl  } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...  </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary " rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
