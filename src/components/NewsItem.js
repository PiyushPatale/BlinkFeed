import React from 'react'
import imgNA from './Image_not_available.png'
const NewsItem = (props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
      <div>
        <div className="card my-3" style={{height:"550px"}}>

          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
            <span className="badge rounded-pill bg-success">{author}</span>
          </div>
          <img style={{height:"250px" , objectFit:"fill"}} src={!imageUrl ? `${imgNA}` : imageUrl  } className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{height:"75px" , overflow:"hidden" , wordBreak:"break-word"}} className="card-title">{title}...  </h5>
            <p style={{height:"95px", overflow:"hidden"}} className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark btn-primary " rel="noreferrer">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
