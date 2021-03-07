import React from 'react';
export const NewsBox = ({news}) => {

  return (
    <div className="col-md-4">
      <div className="fh5co-blog animate-box">
        <a className="blog-bg" style={{backgroundImage:  `url(${news.photo})`}}></a>
        <div className="blog-text">
          <span className="posted_on">{ news.date }</span>
          <h3>{ news.title }</h3>
          <p>{ news.body }</p>
        </div> 
      </div>
    </div>
  );

}
