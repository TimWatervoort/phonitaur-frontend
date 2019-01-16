import React, { Component } from 'react';
import './LessonPage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuestions } from '../../actions/index';
import Navbar from '../Navbar/Navbar';

class LessonPage extends Component {
  render() {

    const { alphabet, match } = this.props;

    return(
      <div>
        <Navbar leftButton={'All Lessons'} leftLink={`/lessons/${alphabet.id}`} rightButton={'Next Lesson'} rightLink={`lesson/${match.params.id + 1}`} />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='my-4 text-center text-white user-text'>{alphabet.name ? alphabet.name : <Redirect to='/home'/>} Lesson 1</h2>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

  const mapStateToProps = state => ({
    user: state.user,
    alphabet: state.alphabet
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getQuestions
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);
