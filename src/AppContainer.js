import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    articles: state.articles,
  });
  
  const AppContainer = connect(
    mapStateToProps
  )(App);
  
  export default AppContainer;