import {
    FETCH_FIRSTUSERPREFERENCE_BEGIN,   
    FETCH_FIRSTUSERPREFERENCE_SUCCESS, 
    FETCH_FIRSTUSERPREFERENCE_FAILURE, 
    FETCH_SECONDUSERPREFERENCE_BEGIN,   
    FETCH_SECONDUSERPREFERENCE_SUCCESS, 
    FETCH_SECONDUSERPREFERENCE_FAILURE, 
    FETCH_THIRDUSERPREFERENCE_BEGIN,  
    FETCH_THIRDUSERPREFERENCE_SUCCESS, 
    FETCH_THIRDUSERPREFERENCE_FAILURE,
  } from '../actions/articleActions';
  
  const initialState = {
    firstUserPreferenceArticles: null,
    secondUserPreferenceArticles: null,
    thirdUserPreferenceArticles: null,
    loading: false,
    error: null
  };
  
  export default function articlesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_FIRSTUSERPREFERENCE_BEGIN:
        // Mark the state as "loading" to signal Loading container
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_FIRSTUSERPREFERENCE_SUCCESS:
        return {
          ...state,
          loading: false,
          firstUserPreferenceArticles: action.payload.articles
        };
  
      case FETCH_FIRSTUSERPREFERENCE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          firstUserPreferenceArticles: []
        };

        case FETCH_SECONDUSERPREFERENCE_BEGIN:
        // Mark the state as "loading" to signal Loading container
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_SECONDUSERPREFERENCE_SUCCESS:
        return {
          ...state,
          loading: false,
          secondUserPreferenceArticles: action.payload.articles
        };
  
      case FETCH_SECONDUSERPREFERENCE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          secondUserPreferenceArticles: []
        };

        case FETCH_THIRDUSERPREFERENCE_BEGIN:
        // Mark the state as "loading" to signal Loading container
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_THIRDUSERPREFERENCE_SUCCESS:
        return {
          ...state,
          loading: false,
          thirdUserPreferenceArticles: action.payload.articles
        };
  
      case FETCH_THIRDUSERPREFERENCE_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          thirdUserPreferenceArticles: []
        };
      default:
        return state;
    }
  }