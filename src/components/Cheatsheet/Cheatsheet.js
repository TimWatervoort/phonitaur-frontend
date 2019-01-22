import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './Cheatsheet.css';

class Cheatsheet extends Component {
  render() {

    const { alphabet, lesson } = this.props;

    return(
      <div>
        <Navbar leftButton={'Back to Lesson'} leftLink={`/lesson/${lesson.id}`} rightButton={'All Lessons'} rightLink={`/learn/${alphabet.name}`}/>
        <h2 className='user-text text-center mx-auto my-2 text-white'>{this.props.match.params.name} Cheatsheet</h2>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alphabet: state.alphabet,
  lesson: state.lesson
})

export default connect(mapStateToProps)(Cheatsheet);
