import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ImageContainer from './components/ImageContainer'
import { fetchTopHeadlines } from "./actions/articleActions";


class App extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchTopHeadlines());
    }

    render() {
        const { error, loading, articles, activeArticle } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
            }

        if (loading) {
            return <div>Loading...</div>;
        }

        if (articles === null) {
            return null;
        } else {
          return (
            <div>
              <ImageContainer articles={this.props.articles} activeArticle={this.props.activeArticle}/>
            </div> 
          );
        }
    }
  }

  const mapStateToProps = state => {
    return {
        articles: state.topHeadlines.articles,
        activeArticle: state.topHeadlines.activeArticle,
        loading: state.topHeadlines.loading,
        error: state.topHeadlines.error
    }
}



export default connect(mapStateToProps)(App)

