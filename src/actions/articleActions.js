export function fetchTopHeadlines() {
    return dispatch => {
      dispatch(fetchTopHeadlinesBegin());
      setTimeout(() => {return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchTopHeadlinesSuccess(json.articles));
        return json.articles;
      })
      .catch(error =>
        dispatch(fetchTopHeadlinesFailure(error))
      );
      }, 2000);
    };
  }

  export function fetchFirstUserPreference(preference) {
    return dispatch => {
      dispatch(fetchFirstUserPreferenceBegin());
      return fetch('https://newsapi.org/v2/everything?q=' + preference + '&sortBy=relevance&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchFirstUserPreferenceSuccess(json.articles));
        console.log(json.articles);
      })
      .catch(error =>
        dispatch(fetchFirstUserPreferenceFailure(error))
      );
    };
  }

  export function fetchSecondUserPreference(preference) {
    return dispatch => {
      dispatch(fetchFirstUserPreferenceBegin());
      return fetch('https://newsapi.org/v2/everything?q=' + preference + '&sortBy=relevance&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchFirstUserPreferenceSuccess(json.articles));
        console.log(json.articles);
      })
      .catch(error =>
        dispatch(fetchFirstUserPreferenceFailure(error))
      );
    };
  }

  export function fetchThirdUserPreference(preference) {
    return dispatch => {
      dispatch(fetchFirstUserPreferenceBegin());
      return fetch('https://newsapi.org/v2/everything?q=' + preference + '&sortBy=relevance&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => {
        dispatch(fetchFirstUserPreferenceSuccess(json.articles));
        console.log(json.articles);
      })
      .catch(error =>
        dispatch(fetchFirstUserPreferenceFailure(error))
      );
    };
  }


export const FETCH_TOPHEADLINES_BEGIN   = 'FETCH_TOPHEADLINES_BEGIN';
export const FETCH_TOPHEADLINES_SUCCESS = 'FETCH_TOPHEADLINES_SUCCESS';
export const FETCH_TOPHEADLINES_FAILURE = 'FETCH_TOPHEADLINES_FAILURE';
export const FETCH_FIRSTUSERPREFERENCE_BEGIN   = 'FETCH_FIRSTUSERPREFERENCE_BEGIN';
export const FETCH_FIRSTUSERPREFERENCE_SUCCESS = 'FETCH_FIRSTUSERPREFERENCE_SUCCESS';
export const FETCH_FIRSTUSERPREFERENCE_FAILURE = 'FETCH_FIRSTUSERPREFERENCE_FAILURE';
export const FETCH_SECONDUSERPREFERENCE_BEGIN   = 'FETCH_SECONDUSERPREFERENCE_BEGIN';
export const FETCH_SECONDUSERPREFERENCE_SUCCESS = 'FETCH_SECONDUSERPREFERENCE_SUCCESS';
export const FETCH_SECONDUSERPREFERENCE_FAILURE = 'FETCH_SECONDUSERPREFERENCE_FAILURE';
export const FETCH_THIRDUSERPREFERENCE_BEGIN   = 'FETCH_THIRDUSERPREFERENCE_BEGIN';
export const FETCH_THIRDUSERPREFERENCE_SUCCESS = 'FETCH_THIRDUSERPREFERENCE_SUCCESS';
export const FETCH_THIRDUSERPREFERENCE_FAILURE = 'FETCH_THIRDUSERPREFERENCE_FAILURE';

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

  export const fetchFirstUserPreferenceBegin = () => ({
    type: FETCH_FIRSTUSERPREFERENCE_BEGIN
  });
  
  export const fetchFirstUserPreferenceSuccess = articles => ({
    type: FETCH_FIRSTUSERPREFERENCE_SUCCESS,
    payload: { articles }
  });
  
  export const fetchFirstUserPreferenceFailure = error => ({
    type: FETCH_FIRSTUSERPREFERENCE_FAILURE,
    payload: { error }
  });

  export const fetchSecondUserPreferenceBegin = () => ({
    type: FETCH_SECONDUSERPREFERENCE_BEGIN
  });
  
  export const fetchSecondUserPreferenceSuccess = articles => ({
    type: FETCH_SECONDUSERPREFERENCE_SUCCESS,
    payload: { articles }
  });
  
  export const fetchSecondUserPreferenceFailure = error => ({
    type: FETCH_SECONDUSERPREFERENCE_FAILURE,
    payload: { error }
  });

  export const fetchThirdUserPreferenceBegin = () => ({
    type: FETCH_THIRDUSERPREFERENCE_BEGIN
  });
  
  export const fetchThirdUserPreferenceSuccess = articles => ({
    type: FETCH_THIRDUSERPREFERENCE_SUCCESS,
    payload: { articles }
  });
  
  export const fetchThirdUserPreferenceFailure = error => ({
    type: FETCH_THIRDUSERPREFERENCE_FAILURE,
    payload: { error }
  });

 
  
  
  