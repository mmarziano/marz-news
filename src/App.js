import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import MainImage from './components/MainImage'

function App() {
  return (
    <div>
      <Navbar />
      <MainImage />
     </div> 
  );
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
