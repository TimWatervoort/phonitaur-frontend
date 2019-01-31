import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import './Cheatsheet.css';
import SheetChart from './SheetChart';

const cyrillic = [{char: 'Е', english: 'ye',ipa:'ye'}, {char: 'А', english: 'a',ipa:'a'}, {char: 'О', english: 'o/ah',ipa:'o'}, {char: 'Ю', english: 'yu',ipa:'yu'}, {char: 'Ё', english: 'yo',ipa:'yo'}, {char: 'Ь', english: 'silent'}, {char: 'Ы', english: 'short i',ipa:'short_i'}, {char: 'Я', english: 'ya',ipa:'ya'}, {char: 'И', english: 'i',ipa:'ee'}, {char: 'Й', english: 'short i',ipa:'short_i'}, {char: 'У', english: 'between u and i',ipa:'y'}, {char: 'Э', english: 'e',ipa:'e'}, {char: 'В', english: 'v',ipa:'v'}, {char: 'Г', english: 'g',ipa:'g'}, {char: 'Д', english: 'd',ipa:'d'}, {char: 'Ж', english: 'zh',ipa:'zh'}, {char: 'З', english: 'z',ipa:'z'}, {char: 'Р', english: 'r',ipa:'rolled_r'}, {char: 'С', english: 's',ipa:'s'}, {char: 'Т', english: 't',ipa:'t'}, {char: 'Ф', english: 'f',ipa:'f'}, {char: 'Х', english: 'kh',ipa:'kh'}, {char: 'Ц', english: 'ts',ipa:'ts'}, {char: 'Ч', english: 'ch',ipa:'ch'}, {char: 'Ш', english: 'sh',ipa:'sh'}, {char: 'Щ', english: 'shch',ipa:'shch'}, {char: 'Б', english: 'b',ipa:'b'}, {char: 'Џ', english: 'dzh',ipa:'j'}, {char: 'К', english: 'k',ipa:'k'}, {char: 'Л', english: 'l',ipa:'l'}, {char: 'М', english: 'm',ipa:'m'}, {char: 'Н', english: 'n',ipa:'n'}, {char: 'П', english: 'p',ipa:'p'}];

const arabic = [{char: 'ا', english: 'a', ipa:'a'}, {char: 'ىى / ى', english: 'short a', ipa:'short_a'}, {char: 'و', english: 'o/u',ipa:'oo'}, {char: 'يي / ي', english: 'i',ipa:'ee'}, {char:'ههه / ه', english: 'h',ipa:'h'}, {char: 'ة', english: 'short e',ipa:'short_e'}, {char: 'ء / أ', english: 'first h in uh-oh', ipa:'glottalstop'}, {char: 'ببب / ب', english: 'b',ipa:'b'}, {char: 'تتت / ت', english: 't', ipa:'t'}, {char: 'ثثث / ث', english: 'th', ipa:'th_voiceless'}, {char: 'ننن / ن', english: 'n',ipa:'n'}, {char: 'ٖسس / س', english: 's', ipa:'s'}, {char: 'شش / ش', english: 'sh',ipa:'sh'}, {char: 'حح / ح', english: 'hard h', ipa:'hard_h'}, {char: 'خخ / خ', english: 'kh', ipa:'kh'}, {char: 'جج / ج', english: 'j', ipa:'j'}, {char: 'مم / م', english: 'm', ipa:'m'}, {char: 'فف / ف', english: 'f', ipa:'f'}, {char: 'قق / ق', english: 'gh', ipa:'gh'}, {char: 'كك / ك', english: 'k', ipa:'k'}, {char: 'لل / ل', english: 'l', ipa:'l'}, {char: 'ر', english: 'r', ipa:'rolled_r'}, {char: 'ز', english: 'z', ipa:'z'}, {char: 'د', english: 'd', ipa:'d'}, {char: 'ذ', english: 'dh', ipa:'dh'}, {char: 'ط', english: 't (backed)', ipa:'t_glottal'}, {char: 'ظ', english: 'dh (backed)',ipa:'dh_glottal'}, {char: 'صص / ص', english: 's (backed)',ipa:'s_glottal'}, {char: 'ضض / ض', english: 'd (backed)',ipa:'d_glottal'}, {char: 'ععع / ع', english: 'a (backed)',ipa:'a_glottal'}, {char: 'غغغ / غ', english: 'gh (backed)',ipa:'gh_glottal'}];

const dutch = [{char: 'ch', english: 'kh',ipa:'kh'}, {char: 'g', english: 'kh',ipa:'kh'}, {char: 'gh', english: 'kh',ipa:'kh'}, {char: 'sch', english: 'skh',ipa:'skh'}, {char: 'j', english: 'y',ipa:'je'}, {char: 'w', english: 'v',ipa:'v'}, {char: 'ee', english: 'ay',ipa:'ei'}, {char: 'ei', english: 'ay',ipa:'ee'}, {char: 'ij', english: 'ay',ipa:'ei'}, {char: 'u', english: 'rounded i',ipa:'y'}, {char: 'y', english: 'ay',ipa:'ei'}, {char: 'ui', english: 'rounded uy',ipa:'ui'}, {char: 'oe', english: 'oo',ipa:'oo'}];

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
