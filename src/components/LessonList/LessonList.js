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
    const { lessons, alphabet, match } = this.props;

    return (
      <div>
        <Navbar leftButton={'My Profile'} leftLink={'/home'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>

        {lessons === 'Getting lessons' ? <h1 className='spinnyBoi mt-5 text-center mx-auto user-text text-white'> <i className="fas fa-cog"></i> </h1> : null}

          <div className='row my-4'>
            <div className='col'>
              <h3 className='user-text text-center text-white'>{Array.isArray(lessons) ? `${match.params.id} Lessons`: null}</h3>
            </div>
          </div>

          <div className='row mb-3'>
              {Array.isArray(lessons) ? lessons.sort((a,b) => a.level-b.level).map((x,i) => <LessonCard key={i} alph={alphabet.name} lesson={x}/>) : null}
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
