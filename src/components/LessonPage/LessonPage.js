import React, { Component } from 'react';
import './LessonPage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuestions } from '../../actions/index';
import Navbar from '../Navbar/Navbar';

class LessonPage extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2 className='text-center text-white user-text'>{this.props.alphabet.name} Lesson 1</h2>
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
