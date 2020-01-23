export function fetchTopHeadlines() {
    return dispatch => {
      dispatch(fetchTopHeadlinesBegin());
      return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchTopHeadlinesSuccess(json.articles));
        return json.articles;
      })
      .catch(error =>
        dispatch(fetchTopHeadlinesFailure(error))
      );
    };
  }


export const FETCH_TOPHEADLINES_BEGIN   = 'FETCH_TOPHEADLINES_BEGIN';
export const FETCH_TOPHEADLINES_SUCCESS = 'FETCH_TOPHEADLINES_SUCCESS';
export const FETCH_TOPHEADLINES_FAILURE = 'FETCH_TOPHEADLINES_FAILURE';

export const fetchTopHeadlinesBegin = () => ({
    type: FETCH_TOPHEADLINES_BEGIN
  });
  
  export const fetchTopHeadlinesSuccess = articles => ({
    type: FETCH_TOPHEADLINES_SUCCESS,
    payload: { articles }
  });
  
  export const fetchTopHeadlinesFailure = error => ({
    type: FETCH_TOPHEADLINES_FAILURE,
    payload: { error }
  });