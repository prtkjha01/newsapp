import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner.jsx";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoding] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const apiKey = `vWioGX6k0t1jgtQ5shGDY3ZWMr5m0Qps9YXV6ziO4m0`;
  //"6a1d4f2afd3b4379bd04f56e72a8bb6d";

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFirstLetter(props.category)}- News First`;

  const updatenews = async () => {
    let url;
    props.setProgress(10);
    if (props?.searchQuery?.length === 0) {
      url = `https://api.newscatcherapi.com/v2/search?q=general&lang=en&sort_by=relevancy&page=${page}&page_size=${props.pageSize}&countries=${props.country}`
      //`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    } else {
      url = `https://api.newscatcherapi.com/v2/search?q=${props.searchQuery}&lang=en&sort_by=relevancy&page=${page}&page_size=${props.pageSize}&countries=${props.country}`
      //`https://newsapi.org/v2/everything?q=${props.searchQuery}&sortBy=popularity&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
    }
    setLoding(true);

    // let data = 
    // await fetch(`https://api.newscatcherapi.com/v2/search?q=general&lang=en&sort_by=relevancy&page=1&countries=in&page_size=20`, {

    //   headers: {
    //     'x-api-key': apiKey
    //   }
    // })
    //   .then((response) => { console.log(response); })
    //   .catch((error) => { console.log('error hai bro !', error); });


    var options = {
      method: 'GET',
      url: url,
      //params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
      headers: {
        'x-api-key': apiKey
      }
    };

    let data = axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    props.setProgress(30);

    let parsedData = await data
    console.log('parsedData', parsedData);
    console.log(parsedData.articles);
    //await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoding(false);

    props.setProgress(100);
  };
  useEffect(() => {
    updatenews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchQuery]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let url;

    if (props?.searchQuery?.length === 0) {
      url = `https://api.newscatcherapi.com/v2/search?q=general&lang=en&sort_by=relevancy&page=${page + 1}&page_size=${props.pageSize}&countries=${props.country}`
      // `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category
      //   }&apiKey=${apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    } else {
      url = `https://api.newscatcherapi.com/v2/search?q=${props.searchQuery}&lang=en&sort_by=relevancy&page=${page + 1}&page_size=${props.pageSize}&countries=${props.country}`
      //`https://newsapi.org/v2/everything?q=${props.searchQuery}&sortBy=popularity&apiKey=${apiKey}&page=${page + 1
      //  }&pageSize=${props.pageSize}`;
    }
    var options = {
      method: 'GET',
      url: url,
      //params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
      headers: {
        'x-api-key': apiKey
      }
    };
    let data = axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    props.setProgress(30);

    let parsedData = await data
    console.log('parsedData', parsedData);
    console.log(parsedData.articles);
    //await data.json();
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h2 className="text-center text-danger mb-4" style={{ marginTop: "100px" }}>
        News First - TOP {props.category.toUpperCase()} HEADLINES
      </h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}

      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4 col-sm-6" key={index}>
                  <NewsItem
                    title={
                      element.title
                        ?
                        element.title
                        //.slice(0, 45) 
                        : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={
                      element.media
                        ? element.media
                        : "data:image/jpeg;base64,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"
                    }
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.published_date.slice(0, 10) + "," + element.published_date.slice(12, 16)}
                    source={element.rights}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 8,
  country: "in",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
