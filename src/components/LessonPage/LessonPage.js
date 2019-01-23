import React, { Component } from 'react';
import './LessonPage.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLesson } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import InstructionCard from '../InstructionCard/InstructionCard';
import Question from '../Question/Question';

class LessonPage extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''}
  }

  handleKeyboard = val => {
    this.setState({value: val});
  }

  render() {

    const { alphabet, match, lesson } = this.props;

    let instructions = null;
    let chars = null;

    if (lesson.lesson_text) {
      let textArr = lesson.lesson_text.split(';');
      if (textArr[textArr.length-1].startsWith('New')){
        let charsA = textArr.pop();
        let charsB = charsA.split(':')[1];
        chars = charsB.split(',');
      }
      instructions = textArr.map((x,i) => <InstructionCard key={i} text={x} />);
    }

    return(
      <div>
        <Navbar leftButton={'All Lessons'} leftLink={`/learn/${alphabet.name}`} rightButton={'Cheat Sheet'} rightLink={`/sheet/${alphabet.name}`} />
        <div className='container'>

          <div className='row'>
            <div className='col'>
              <h2 className='mt-4 text-center text-white user-text'>{alphabet.name ? alphabet.name : null } Lesson 1</h2>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <h4 className='my-4 text-center text-white user-text'>{lesson.name ? lesson.name : null}</h4>
            </div>
          </div>

          <div className='row'>
            <div className='card mx-auto mt-2 mb-3' id='lesson-card'>
              <div className='card-body lesson-card-body'>
                <h4 className='card-title mx-auto text-center text-white user-text'>New Characters</h4>
                {chars ? chars.map((x,i) => <span key={i} className='mx-auto user-text text-white'> {x} </span>) : <span className='text-center user-text text-white'>{'None'}</span>}
              </div>
            </div>
          </div>

          <div className='row'>
            {instructions}
          </div>

          <div className='row'>
          <div className='col-12'>
            <div className='card mx-auto my-2' id='question-card'>
              <div className='card-body lesson-card-body'>
                <h4 className='card-title mx-auto text-center text-white user-text'>Knowledge Check</h4>
                {lesson.questions ? lesson.questions.map((x,i) => <Question key={i} question={x} value={this.state.value} />) : null}
              </div>
            </div>
          </div>

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
