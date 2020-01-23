import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import ImageContainer from './components/ImageContainer'
import { fetchTopHeadlines } from "./actions/articleActions";


class App extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchTopHeadlines());
    }

    render() {
        const { error, loading, articles } = this.props;

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
              <Navbar articles={this.props.articles}/>
              <ImageContainer articles={this.props.articles}/>
            </div> 
          );
        }
    }
  }

  const mapStateToProps = state => {
    return {
        articles: state.topHeadlines.articles,
        loading: state.loading,
        error: state.error
    }
}



export default connect(mapStateToProps)(App)

