import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card mx-1 px-2 shadow p-3 mb-5 bg-white rounded">
        <img src={imageUrl} className="card-img-top" style={{ height: "250px" }} alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title}...
            <span
              className="position-absolute top-0 
                         translate-middle badge  bg-dark"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </h5>
          <p className="card-text">
            {description}...
            <a href={newsUrl} target="_blank" rel="noreferrer">
              Read more
            </a>
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {date}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
