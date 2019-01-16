import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Transcripter from './components/Transcripter/Transcripter';
import Catalog from './components/Catalog/Catalog';
import LessonList from './components/LessonList/LessonList';
import LessonPage from './components/LessonPage/LessonPage';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route path='/home' component={Home}/>
        <Route path='/transcripter' component={Transcripter}/>
        <Route path='/catalog' component={Catalog}/>
        <Route path='/learn/:id' component={LessonList}/>
        <Route path='/lesson/:id' component={LessonPage}/>
      </div>
    );
  }
}

export default App;
