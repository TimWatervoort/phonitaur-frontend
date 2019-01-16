import React, { Component } from 'react';
import './LessonCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons } from '../../actions/index';

class LessonCard extends Component {
  render(){

    const { lesson, alph } = this.props

    return(
      <div className='col-lg-4 col-md-12'>
        <div className='card' id='lesson-card'>
          <div className='card-body lesson-card-body'>
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
  getLessons
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LessonCard);
