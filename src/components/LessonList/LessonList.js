import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons, getAlphabet } from '../../actions/index';
import Navbar from '../Navbar/Navbar';
import LessonCard from '../LessonCard/LessonCard';
import './LessonList.css';

class LessonList extends Component {

  constructor(props){
    super(props);
    this.props.getLessons(this.props.match.params.id);
    this.props.getAlphabet(this.props.match.params.id);
  }

  render() {
    const { lessons, alphabet } = this.props;

    return (
      <div>
        <Navbar />
        <div className='container'>
          <div className='row mb-4'>
            <div className='col'>
              <h3 className='user-text text-center text-white'>{alphabet? alphabet.name: null} Lessons</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              {Array.isArray(lessons) ? lessons.map((x,i) => <LessonCard key={i} alph={alphabet.name} lesson={x}/>) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  lessons: state.lessons,
  alphabet: state.alphabet
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLessons,
  getAlphabet
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
