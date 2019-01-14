import React, { Component } from 'react';
import TestComponent from './components/TestComponent';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Transcripter from './components/Transcripter/Transcripter';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/landing' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/transcripter' component={Transcripter}/>
      </div>
    );
  }
}

export default App;
