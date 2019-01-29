import React, { Component } from 'react';
import './LessonPage.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLesson } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import InstructionCard from '../InstructionCard/InstructionCard';
import Question from '../Question/Question';
import { Redirect, Link } from 'react-router-dom';

class LessonPage extends Component {

  constructor(props) {
    super(props);
    const { match, getLesson } = this.props
    getLesson(match.params.id)
    this.state = {correct: [], inst: 0, instLen: 0}
    this.lessonUp = this.lessonUp.bind(this);
    this.lessonDown = this.lessonDown.bind(this);
  }

  questionAnswered = item => {
    this.setState({correct: [...this.state.correct, item]});
  }

  lessonUp(len) {
    let curLes = this.state.inst;
    if (curLes+1 === len) {
      curLes = 0;
    } else {
      curLes++;
    }
    this.setState({inst: curLes});
  }

  lessonDown(len) {
    let curLes = this.state.inst;
    if (curLes === 0) {
      curLes = len-1;
    } else {
      curLes--;
    }
    this.setState({inst: curLes});
  }

  render() {

    const { lesson } = this.props;

    let instructions = null, instLen = 0;
    let chars = null;

    if (lesson.lesson_text) {
      let textArr = lesson.lesson_text.split(';');
      if (textArr[textArr.length-1].startsWith('New')){
        let charsA = textArr.pop();
        let charsB = charsA.split(':')[1];
        chars = charsB.split(',');
      }
      instructions = textArr.map((x,i) => <InstructionCard key={i} text={x} />);
      instLen = instructions.length;
    }

    let nextLesson = null;
    if (lesson.questions && this.state.correct.length === lesson.questions.length) {
      nextLesson = <Link to={`/learn/${lesson.language}`} className='instro-btn btn btn-danger'>Back to Lessons</Link>;
    }

    return(
      <div>
        <Navbar leftButton={'All Lessons'} leftLink={`/learn/${lesson.language}`} rightButton={'Cheat Sheet'} rightLink={`/sheet/${lesson.language}`} />
        <div className='container'>

        {this.state.next ? <Redirect to={`/lesson/${lesson.id+1}`}/> : null}

        {lesson === 'Getting lesson.' ? <h1 className='spinnyBoi mt-5 text-center mx-auto user-text text-white'> <i className="fas fa-cog"></i> </h1> : null}

          <div className='row'>
            <div className='col'>
              <h2 className='mt-4 text-center text-white user-text'>{lesson.language ? lesson.language : null } Lesson {lesson.level ? lesson.level : null}</h2>
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
            {instructions ? instructions[this.state.inst] : null }
          </div>
          <div className='row'>
            <div className='col mb-2'>
              <button onClick={() => this.lessonDown(instLen)} className='text-center instro-btn btn btn-danger'>Previous</button>
            </div>
            <div className='col'>
              <button onClick={() => this.lessonUp(instLen)} className='text-center instro-btn btn btn-danger'>Next</button>
            </div>
          </div>

          <div className='row'>
          <div className='col-12'>
            <div className='card mx-auto my-2' id='question-card'>
              <div className='card-body lesson-card-body'>
                <h4 className='card-title mx-auto text-center text-white user-text'>Knowledge Check</h4>
                {lesson.questions ? lesson.questions.map((x,i) => <Question key={i} question={x} alph={lesson.language} answer={this.questionAnswered}/>) : null}
              </div>
            </div>
          </div>

          <div className='row my-4 mx-auto'>
            <div className='col'>
              {nextLesson}
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
