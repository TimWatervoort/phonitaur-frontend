import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import Transcripter from './components/Transcripter/Transcripter';
import Catalog from './components/Catalog/Catalog';
import LessonList from './components/LessonList/LessonList';
import LessonPage from './components/LessonPage/LessonPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthHome from './components/AuthHome/AuthHome';
import Cheatsheet from './components/Cheatsheet/Cheatsheet';

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
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/auth' component={AuthHome}/>
        <Route path='/sheet/:name' component={Cheatsheet}/>
      </div>
    );
  }
}

export default App;
