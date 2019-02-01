import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './Cheatsheet.css';
import SheetChart from './SheetChart';
import ipa from './IPA';
import arabic from './Arabic';
import cyrillic from './Cyrillic.js';
import dutch from './Dutch';
import german from './German';

class Cheatsheet extends Component {
  render() {

    let items;
    const { match, lesson } = this.props;

    switch(match.params.name){
      case 'Cyrillic':
        items = cyrillic;
        break;
      case 'Arabic':
        items = arabic;
        break;
      case 'Dutch':
        items = dutch;
        break;
      case 'International Phonetic Alphabet':
        items = ipa;
        break;
      case 'German':
        items = german;
        break;
      default:
        items = null;
        break;
    }

    return(
      <div>
        <Navbar leftButton={'Back to Lesson'} leftLink={`/lesson/${lesson.id}`} rightButton={'All Lessons'} rightLink={`/learn/${match.params.name}`}/>
        <div className='container mb-3'>
          <h2 className='user-text text-center mx-auto my-4 text-white'>{match.params.name} Cheatsheet</h2>
          {match.params.name === 'Arabic' ? <h6 className='user-text text-center mb-4 text-white'>Note: if a character has more than one form, it is shown in isolated position, and then in its in-text positions.</h6> : null}
          <div className='row'>
            <div className='col'>
              <h4 className='user-text text-white'>Character</h4>
            </div>

            <div className='col'>
              <h4 className='user-text text-white'>Audio</h4>
            </div>

            <div className='col'>
              <h4 className='user-text text-white'>English Transcription</h4>
            </div>
          </div>
          {items ? items.map((x,i) => <SheetChart key={i} item={x}/>) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  alphabet: state.alphabet,
  lesson: state.lesson
})

export default connect(mapStateToProps)(Cheatsheet);
