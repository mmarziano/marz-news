import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ImageContainer from './components/ImageContainer'
import { fetchTopHeadlines } from "./actions/articleActions";
import { fetchSearch } from './actions/searchActions';


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
            return ( 
              <div className="container-fluid col-lg-12">
                    <section className="wrapper dark">
                      <div className="row text-center">
                          <h1>Scanning headlines...</h1>
                      </div>
                      <div className="row">
                        <div className="spinner">
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                      </div>
                  </section>
              </div>
            )
        }

        if (articles === null) {
            return null;
        } else {
          return (
            <div>
              <ImageContainer articles={this.props.articles}/>
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
    fetchSearch: () => dispatch(fetchSearch()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App)

