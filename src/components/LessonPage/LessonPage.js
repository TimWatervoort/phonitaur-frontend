import React, { Component } from 'react';
import './LessonPage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLesson } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import InstructionCard from '../InstructionCard/InstructionCard';

class LessonPage extends Component {
  render() {

    const { alphabet, match, lesson } = this.props;

    let instructions = null;
    let chars = null;
    if (lesson.lesson_text) {
      let textArr = lesson.lesson_text.split(';');
      if (textArr[textArr.length-1].startsWith('New')){
        chars = textArr.pop();
      }
      instructions = textArr.map((x,i) => <InstructionCard key={i} text={x} />);
    }

    return(
      <div>
        <Navbar leftButton={'All Lessons'} leftLink={`/learn/${alphabet.name}`} rightButton={'Next Lesson'} rightLink={`lesson/${match.params.id + 1}`} />
        <div className='container'>

          <div className='row'>
            <div className='col'>
              <h2 className='my-4 text-center text-white user-text'>{alphabet.name ? alphabet.name : <Redirect to='/home'/>} Lesson 1</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <h4 className='my-4 text-center text-white user-text'>{lesson.name ? lesson.name : null}</h4>
            </div>
          </div>

          <div className='row'>
            {instructions}
          </div>

        </div>
      </div>

    )
  }
}

  const mapStateToProps = state => ({
    user: state.user,
    alphabet: state.alphabet,
    lesson: state.lesson
  });

  const mapDispatchToProps = dispatch => bindActionCreators({
    getLesson
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);
