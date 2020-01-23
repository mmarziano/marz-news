import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import ImageContainer from './components/ImageContainer'


class App extends React.Component {

    getArticles = () => {
      fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=36ae05704c7044be99dbb50a732950d1')
      .then(response => response.json())
      .then(json => this.props.mapStateToProps(json))
    }

    render() {
      console.log(this.props)
        return (
          <div>
            <Navbar />
            <ImageContainer articles={this.props.articles}/>
          </div> 
        );
      

    }
  }


export default App
