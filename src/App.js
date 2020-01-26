import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './css/loading.css';
import { connect } from 'react-redux'
import ImageContainer from './components/ImageContainer'
import Loading from './components/Loading'
import { fetchTopHeadlines } from "./actions/articleActions";
import { fetchSearch } from './actions/searchActions';


class App extends React.Component {
    constructor() {
      super();
      this.state = {
        firstRender: true,
      };
    }

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
                      <Route path="/about">
                        <h2>Testing</h2>
                      </Route>
                      <Route path="/users">
                        <h2>Test again</h2>
                      </Route>
                      <Route path="/">
                        <ImageContainer topHeadlines={this.props.topHeadlines}/>
                      </Route>
                    </Switch>
                  </div>
                </Router>);
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
    fetchSearch: () => dispatch(fetchSearch()),
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App)

