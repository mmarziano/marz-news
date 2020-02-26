export function fetchSearch(input, language) {
    let query = input + '&language='+ language
    return dispatch => {
      dispatch(fetchSearchBegin());
      setTimeout(() => {return fetch('https://newsapi.org/v2/everything?q='+query+'&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchSearchSuccess(json.articles));
        return(json.articles);
      })
      .catch(error =>
        dispatch(fetchSearchFailure(error))
      );
    }, 2000);
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



 
  
  
  