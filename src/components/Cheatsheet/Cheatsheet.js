import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './Cheatsheet.css';
import SheetChart from './SheetChart.js'

const cyrillic = [{char: 'Е', english: 'ye'}, {char: 'А', english: 'a'}, {char: 'О', english: 'o/ah'}, {char: 'Ю', english: 'yu'}, {char: 'Ё', english: 'yo'}, {char: 'Ь', english: 'silent'}, {char: 'Ы', english: 'short i'}, {char: 'Я', english: 'ya'}, {char: 'И', english: 'i'}, {char: 'Й', english: 'short i'}, {char: 'У', english: 'between u and i'}, {char: 'Э', english: 'e'}, {char: 'В', english: 'v'}, {char: 'Г', english: 'g'}, {char: 'Д', english: 'd'}, {char: 'Ж', english: 'zh'}, {char: 'З', english: 'z'}, {char: 'Р', english: 'r'}, {char: 'С', english: 's'}, {char: 'Т', english: 't'}, {char: 'Ф', english: 'f'}, {char: 'Х', english: 'kh'}, {char: 'Ц', english: 'tsh'}, {char: 'Ч', english: 'ch'}, {char: 'Ш', english: 'sh'}, {char: 'Щ', english: 'shch'}, {char: 'Б', english: 'b'}, {char: 'Џ', english: 'dzh'}, {char: 'К', english: 'k'}, {char: 'Л', english: 'l'}, {char: 'М', english: 'm'}, {char: 'Н', english: 'n'}, {char: 'П', english: 'p'}];

class Cheatsheet extends Component {
  render() {

    let items;
    const { alphabet, lesson } = this.props;

    if (alphabet.name === 'Cyrillic'){
      items = cyrillic;
    }

    return(
      <div>
        <Navbar leftButton={'Back to Lesson'} leftLink={`/lesson/${lesson.id}`} rightButton={'All Lessons'} rightLink={`/learn/${alphabet.name}`}/>
        <div className='container'>
          <h2 className='user-text text-center mx-auto my-4 text-white'>{this.props.match.params.name} Cheatsheet</h2>
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
