import React, { Component } from 'react';
import './LessonCard.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLesson } from '../../actions/index';

class LessonCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
    this.redirectToLesson = this.redirectToLesson.bind(this);
  }

  redirectToLesson() {
    this.setState({clicked: true});
  }

  render(){

    const { lesson, alph, user } = this.props

    // if the user has completed the lesson, change the background to green.
    let color = 'lesson-card-body';
    if (user.lessons) {
      let idMaps = user.lessons.map(x => x.id);
      if (idMaps.includes(lesson.id)) color = 'lesson-complete';
    }

    return(
      <div className='col-lg-4 col-md-12'>
        {this.state.clicked ? <Redirect to={`/lesson/${lesson.id}`}/> : null}
        <div onClick={this.redirectToLesson} className='card my-2' id='lesson-card'>
          <div className={`card-body ${color}`}>
            <h4 className='card-title text-white user-text'>{lesson.name}</h4>
            <h5 className='card-subtitle text-grey user-text'>{alph} Lesson {lesson.level}</h5>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLesson
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LessonCard);
