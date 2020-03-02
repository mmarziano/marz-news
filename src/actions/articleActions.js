export function fetchTopHeadlines() {
    return dispatch => {
      dispatch(fetchTopHeadlinesBegin());
      setTimeout(() => {return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchTopHeadlinesSuccess(json.articles));
        return (json.articles);
      })
      .catch(error =>
        dispatch(fetchTopHeadlinesFailure(error))
      );
      }, 1000);
    };
  }

  const recordArticles = (articles) => {
      let url = 'http://localhost:3001/articles';
      articles.map(article => 
        fetch(url, {   
          method: 'POST', 
          headers: { 
              'Content-Type': 'application/json', 
              'Accept': 'application/json',
              'Origin': 'http://localhost:3000',
              "Authorization" : `Bearer ${localStorage.getItem('token')}`
          }, 
          body: JSON.stringify({
              article: {
                  author: article.author,
                  title:  article.title,
                  description: article.description,
                  url: article.url,
                  urlToImage: article.urlToImage,
                  publishedAt: article.publishedAt,
                  content: article.content,
                  source: article.source.name,
              }})
          })
          .then(response => response.json())
          .then(json => {return(json)})
          .catch(error => console.log(error) )
      )
  }


export const FETCH_TOPHEADLINES_BEGIN   = 'FETCH_TOPHEADLINES_BEGIN';
export const FETCH_TOPHEADLINES_SUCCESS = 'FETCH_TOPHEADLINES_SUCCESS';
export const FETCH_TOPHEADLINES_FAILURE = 'FETCH_TOPHEADLINES_FAILURE';


export const fetchTopHeadlinesBegin = () => ({
    type: FETCH_TOPHEADLINES_BEGIN
  });
  
  export const fetchTopHeadlinesSuccess = articles => ({
    type: FETCH_TOPHEADLINES_SUCCESS,
    payload: {articles}
  });
  
  export const fetchTopHeadlinesFailure = error => ({
    type: FETCH_TOPHEADLINES_FAILURE,
    payload: { error }
  });

  

 
  
  
  