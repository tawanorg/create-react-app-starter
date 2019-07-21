/* eslint-disable */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from 'components/Header';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Header />
    )
  }
}

App.propTypes = {}

App.defaultProps = {}

export default App;
