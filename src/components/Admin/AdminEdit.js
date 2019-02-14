import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLanguages } from '../../actions/index';

class AdminEdit extends Component {

  constructor(props){
    super(props);
    this.state={
      languageId: '',
      languageName: '',
      languageImg: '',
      languageColor: '',
      lessonName: '',
      lessonLanguage: '',
      lessonText: '',
      lessonLevel: '',
      lessonIcon: '',
      questionText: '',
      questionAnswer: '',
      questionName: '',
      questionLesson: ''
    }

  }

  langEditInit = async e => {
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/language/${e.target.id}`);
    const json = await response.json();
    this.setState({
      languageId: json.id,
      languageName: json.name,
      languageImg: json.img,
      languageColor: json.text_color
    });
  }

  langEditSubmit = async e => {
    e.preventDefault();
    const data = {
      name: this.state.languageName,
      img: this.state.languageImg,
      text_color: this.state.languageColor
    }
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/language/${this.state.languageId}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const json = await response.json();
    console.log(json);
  }

  handleLanguage = e => {
    const key = `language${e.target.name}`;
    this.setState({ [key]: e.target.value });
  }

  render() {

    const { languages } = this.props;

    // const theBois = [{name: 'Gerald'},{name: 'Egbert'},{name:'Azvyrakhys'}];

    return(
      <div>
        <Navbar leftButton={'Home'} leftLink={`/home`} rightButton={'Catalog'} rightLink={`/catalog`} />
        <h4 className='text-white mx-auto text-center my-4'>Edit Stuff</h4>
        <div className='container'>

          <div className='row'>
            <div className='col'>
              {Array.isArray(languages) ? languages.map((x,i) => <span key={i} id={x.id} onClick={this.langEditInit} className='mx-1 badge badge-dark'>{x.name}</span>) : null}
            </div>
          </div>

          <div className='row'>
            <div className='col'>
            <form onSubmit={this.langEditSubmit} className='mb-4'>
              <input type='text' name='Name' onChange={this.handleLanguage} value={this.state.languageName} placeholder='Language name' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Img' onChange={this.handleLanguage} value={this.state.languageImg} placeholder='Language image' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Color' onChange={this.handleLanguage} value={this.state.languageColor} placeholder='Language text color' autoComplete='off' className='my-2 form-control'/>
              <button className='btn btn-danger mx-auto text-center' type='submit'>Submit Language</button>
            </form>

            <form onSubmit={this.addLesson} className='mb-4'>
              <input type='text' name='Name' onChange={this.handleLesson} value={this.lessonName} placeholder='Lesson name' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Language' onChange={this.handleLesson} value={this.lessonLanguage} placeholder='Lesson language' autoComplete='off' className='my-2 form-control'/>
              <textarea type='text' name='Text' onChange={this.handleLesson} value={this.lessonText} placeholder='Lesson text' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Level' onChange={this.handleLesson} value={this.lessonLevel} placeholder='Lesson level' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Icon' onChange={this.handleLesson} value={this.lessonIcon} placeholder='Lesson icon' autoComplete='off' className='my-2 form-control'/>
              <button className='btn btn-danger mx-auto text-center' type='submit'>Submit Lesson</button>
            </form>

            <form onSubmit={this.addQuestion} className='mb-4'>
              <input type='text' name='Name' onChange={this.handleQuestion} value={this.questionName} placeholder='Question name' autoComplete='off' className='my-2 form-control'/>
              <input type='number' name='Lesson' onChange={this.handleQuestion} value={this.questionLesson} placeholder='Question lesson' autoComplete='off' className='my-2 form-control'/>
              <textarea type='text' name='Text' onChange={this.handleQuestion} value={this.questionText} placeholder='Question text' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Answer' onChange={this.handleQuestion} value={this.questionAnswer} placeholder='Question answer' autoComplete='off' className='my-2 form-control'/>
              <button className='btn btn-danger mx-auto text-center' type='submit'>Submit Question</button>
            </form>

          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  languages: state.languages
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLanguages
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(AdminEdit);
