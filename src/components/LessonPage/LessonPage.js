import React, { Component } from 'react';
import './LessonPage.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLesson, updateCourses } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import InstructionCard from '../InstructionCard/InstructionCard';
import Question from '../Question/Question';
import { Redirect, Link } from 'react-router-dom';
import Progress from './Progress';

class LessonPage extends Component {

  constructor(props) {
    super(props);
    const { match, getLesson } = this.props
    getLesson(match.params.id)
    this.state = {correct: [], inst: 0, instLen: 0, done: 0}
    this.lessonUp = this.lessonUp.bind(this);
    this.lessonDown = this.lessonDown.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(){
    //add the lesson to the user, indicating that the user has completed it
    const { lesson, user, updateCourses } = this.props;
    user.lessons = [...user.lessons, lesson];
    console.log(user);
    updateCourses(user);
  }

  questionAnswered = item => {
    //add the item to the list of questions correctly answered in state
    this.setState({correct: [...this.state.correct, item]});
  }

  lessonUp(len) {
    //go to the next instruction card or to the first one if on the last card
    const { lesson } = this.props;
    let curLes = this.state.inst;
    if (curLes+1 === len) {
      curLes = 0;
    } else {
      curLes++;
    }

    let new_undone;
    let instLen = lesson.lesson_text.split(';');
    if (typeof this.state.undone !== 'number'){
      new_undone = instLen.length - 2;
    } else if (this.state.undone > 0) {
      new_undone = this.state.undone - 1;
    } else {
      new_undone = this.state.undone;
    }

    let new_done;
    if (this.state.done !== instLen.length - 1){
      new_done = this.state.done + 1;
    } else {
      new_done = this.state.done;
    }

    this.setState({inst: curLes, undone: new_undone, done: new_done});
    console.log(this.state);
  }

  lessonDown(len) {
    //go to the previous instruction card or to the last one if on the first card
    let curLes = this.state.inst;
    if (curLes === 0) {
      curLes = len-1;
    } else {
      curLes--;
    }
    this.setState({inst: curLes});
  }

  render() {

    const { lesson, user } = this.props;

    let instructions = null, instLen = 0;
    let chars = null;

    //split up the lesson text into instruction cards and a new character card
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

    //If all questions are correctly answered, add the course to the user if it doesn't have it, then show a button to go back to the lessons.
    if (lesson.questions && this.state.correct.length === lesson.questions.length) {

      let uMap = user.lessons.map(x => x.id);
      if (!uMap.includes(lesson.id)) this.updateUser();
      nextLesson = <Link to={`/learn/${lesson.language}`} className='btn btn-danger mx-auto text-center instro-btn'>Back to Lessons</Link>;

    }

    // create an array that will be the values pushed to the 'Progress' component. That way, it can be mapped directly.
    let doneArray = [];
    for (var i = 0; i < this.state.done; i++) {
      doneArray.push('done');
    }
    for (var x = 0; x < this.state.undone; x++) {
      doneArray.push('undone')
    }

    // If the user hasn't progressed at all, make all the bars red, otherwise, go to the doneArray.
    let progressBar;
    if (typeof this.state.undone !== 'number' && instructions) {
      progressBar = instructions.map((x,i) => <Progress key={i} color={'undone'} number={i+1}/>);
    } else {
      progressBar = doneArray.map((x,i) => <Progress key={i} color={x} number={i+1}/>)
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
            <div className='col'>
              <p className='text-center mx-auto text-white user-text'>
                Head over to the Cheat Sheet to hear audio!
                </p>
            </div>
          </div>

          <div className='container'>
          <div className='row my-1'>
            {progressBar}
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
    getLesson,
    updateCourses
  }, dispatch);

  export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);
