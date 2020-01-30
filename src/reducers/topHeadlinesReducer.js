import {
    FETCH_TOPHEADLINES_BEGIN,
    FETCH_TOPHEADLINES_SUCCESS,
    FETCH_TOPHEADLINES_FAILURE,
  } from '../actions/articleActions';
  
  const initialState = {
    topHeadlines: null,
    loading: false,
    error: null
  };
  
  export default function topHeadlinesReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_TOPHEADLINES_BEGIN:
        // Mark the state as "loading" to signal Loading container
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_TOPHEADLINES_SUCCESS:
        return {
          ...state,
          loading: false,
          topHeadlines: action.payload.articles
        };
  
      case FETCH_TOPHEADLINES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          topHeadlines: []
        };

      default:
        return state;
    }
  }