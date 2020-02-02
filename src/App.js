import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './css/loading.css';
import './css/articles.css';
import { connect } from 'react-redux'
import { fetchTopHeadlines } from "./actions/articleActions";
import ImageContainer from './components/ImageContainer'
import Loading from './components/Loading'


class App extends React.Component {
  componentDidMount() {
    this.props.fetchTopHeadlines();
  }


  render() {
          const { error, loading, topHeadlines} = this.props;

          if (error) {
              return <div>Error! {error.message}</div>;
              }

          if (loading && topHeadlines === null) {
            return (<Loading />)
          }

          if (topHeadlines !== null) {
            return (
              <Router>
                <div>
                    <Switch>
                        <Route path="/:userPref1">
                          <ImageContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                        <Route path="/:userPref2">
                          <ImageContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                        <Route path="/:userPref3">
                          <ImageContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                        <Route path="/">
                          <ImageContainer topHeadlines={this.props.topHeadlines}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            );
          } else {
            return null;
          }
      }
  }

const mapStateToProps = state => {
    return {
        topHeadlines: state.topHeadlines.topHeadlines,
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