import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './Cheatsheet.css';
import SheetChart from './SheetChart.js'

const cyrillic = [{char: 'Е', english: 'ye'}, {char: 'А', english: 'a'}, {char: 'О', english: 'o/ah'}, {char: 'Ю', english: 'yu'}, {char: 'Ё', english: 'yo'}, {char: 'Ь', english: 'silent'}, {char: 'Ы', english: 'short i'}, {char: 'Я', english: 'ya'}, {char: 'И', english: 'i'}, {char: 'Й', english: 'short i'}, {char: 'У', english: 'between u and i'}, {char: 'Э', english: 'e'}, {char: 'В', english: 'v'}, {char: 'Г', english: 'g'}, {char: 'Д', english: 'd'}, {char: 'Ж', english: 'zh'}, {char: 'З', english: 'z'}, {char: 'Р', english: 'r'}, {char: 'С', english: 's'}, {char: 'Т', english: 't'}, {char: 'Ф', english: 'f'}, {char: 'Х', english: 'kh'}, {char: 'Ц', english: 'tsh'}, {char: 'Ч', english: 'ch'}, {char: 'Ш', english: 'sh'}, {char: 'Щ', english: 'shch'}, {char: 'Б', english: 'b'}, {char: 'Џ', english: 'dzh'}, {char: 'К', english: 'k'}, {char: 'Л', english: 'l'}, {char: 'М', english: 'm'}, {char: 'Н', english: 'n'}, {char: 'П', english: 'p'}];

const arabic = [{char: 'ا', english: 'a'}, {char: 'ىى / ى', english: 'short a'}, {char: 'و', english: 'o/u'}, {char: 'يي / ي', english: 'i'}, {char:'ههه / ه', english: 'h'}, {char: 'ة', english: 'short e'}, {char: 'ء / أ', english: 'first h in uh-oh'}, {char: 'ببب / ب', english: 'b'}, {char: 'تتت / ت', english: 't'}, {char: 'ثثث / ث', english: 'th'}, {char: 'ننن / ن', english: 'n'}, {char: 'ٖسس / س', english: 's'}, {char: 'شش / ش', english: 'sh'}, {char: 'حح / ح', english: 'hard h'}, {char: 'خخ / خ', english: 'kh'}, {char: 'جج / ج', english: 'j'}, {char: 'مم / م', english: 'm'}, {char: 'فف / ف', english: 'f'}, {char: 'قق / ق', english: 'gh'}, {char: 'كك / ك', english: 'k'}, {char: 'لل / ل', english: 'l'}, {char: 'ر', english: 'r'}, {char: 'ز', english: 'z'}, {char: 'د', english: 'd'}, {char: 'ذ', english: 'dh'}, {char: 'ط', english: 't (backed)'}, {char: 'ظ', english: 'dh (backed)'}, {char: 'صص / ص', english: 's (backed)'}, {char: 'ضض / ض', english: 'd (backed)'}, {char: 'ععع / ع', english: 'a (backed)'}, {char: 'غغغ / غ', english: 'gh (backed)'}];

const dutch = [{char: 'ch', english: 'kh'}, {char: 'g', english: 'kh'}, {char: 'gh', english: 'kh'}, {char: 'sch', english: 'skh'}, {char: 'j', english: 'y'}, {char: 'w', english: 'v'}, {char: 'ee', english: 'ay'}, {char: 'ei', english: 'ay'}, {char: 'ij', english: 'ay'}, {char: 'u', english: 'rounded i'}, {char: 'y', english: 'ay'}, {char: 'ui', english: 'rounded uy'}, {char: 'oe', english: 'oo'}];

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
