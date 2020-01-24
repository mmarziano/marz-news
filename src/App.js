import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ImageContainer from './components/ImageContainer'
import { fetchTopHeadlines } from "./actions/articleActions";


class App extends React.Component {

    componentDidMount() {
      this.props.fetchTopHeadlines();
    }

    render() {
        const { error, loading, articles} = this.props;

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
              <ImageContainer articles={this.props.articles} />
            </div> 
          );
        }
    }
  }

  const mapStateToProps = state => {
    return {
        articles: state.topHeadlines.articles,
        loading: state.topHeadlines.loading,
        error: state.topHeadlines.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return  {
    fetchTopHeadlines: () => dispatch(fetchTopHeadlines()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App)

