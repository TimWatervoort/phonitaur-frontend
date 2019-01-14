import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
import { Route } from 'react-router-dom';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/landing' component={Landing}/>
      </div>
    );
  }
}

export default App;
