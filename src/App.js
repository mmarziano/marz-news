import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './css/loading.css';
import ImageContainer from './components/ImageContainer'
import Loading from './components/Loading'


class App extends React.Component {
    state = {
        topHeadlines: [],

      };
 
    
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
                    <ImageContainer topHeadlines={this.props.topHeadlines}/>
              )
            } else {
              return null;
            }
        }
    }


export default App
