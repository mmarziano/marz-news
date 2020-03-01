import { combineReducers } from "redux";
import topHeadlines from "./topHeadlinesReducer";
import searchArticles from './searchArticlesReducer';


export default combineReducers({
  topHeadlines, 
  searchArticles,
});