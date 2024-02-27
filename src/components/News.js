import React, { useState , useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {  
    
  const [articles , setArticles] =  useState([])
  const [loading , setLoading] =  useState(true)
  const [page , setPage] =  useState(1)
  const [totalResults , setTotalResults] =  useState(0)
  
  
  const updateNews = async ()=>{
    document.title = `${props.category} - BlinkFeed : Piyush Patale`;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf220bc8e09c4c998c94a2ed9e7eb124&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
  }

  useEffect(()=>{
    updateNews();
  }, [])

     const fetchMoreData = async ()=> {
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf220bc8e09c4c998c94a2ed9e7eb124&pageSize=${props.pageSize}&page=${page+1}`;
       setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json()
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      }

    return (
      <>
        <h1 className="text-center"  style={{ margin: '35px 0px' , marginTop:'80px' }}>BlinkFeed - Top {(props.category)} Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
        > 
            <div className="container">
                  
            <div className="row">
                {articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                    </div>
                })}
            </div>
            </div> 
        </InfiniteScroll>
      </>
    )
  
}

News.defaultProps= {
  country : 'in',
  pageSize: 8,
  category : 'General'
}

News.propTypes= {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category : PropTypes.string,
}

export default News
