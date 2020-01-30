import { combineReducers } from "redux";
import topHeadlines from "./topHeadlinesReducer";
import searchArticles from './searchArticlesReducer';
import articles from './articlesReducer';

export default combineReducers({
  topHeadlines, 
  searchArticles,
  articles,
});