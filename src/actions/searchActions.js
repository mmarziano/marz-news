export function fetchSearch(input) {
    return dispatch => {
      console.log(input)
      dispatch(fetchSearchBegin());
      return fetch('https://newsapi.org/v2/everything?q='+input+'&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchSearchSuccess(json.articles));
        console.log(json.articles);
      })
      .catch(error =>
        dispatch(fetchSearchFailure(error))
      );
    };
  }


export const FETCH_SEARCH_BEGIN   = 'FETCH_SEARCH_BEGIN';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE';

export const fetchSearchBegin = () => ({
    type: FETCH_SEARCH_BEGIN
  });
  
  export const fetchSearchSuccess = articles => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: { articles }
  });
  
  export const fetchSearchFailure = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: { error }
  });



 
  
  
  