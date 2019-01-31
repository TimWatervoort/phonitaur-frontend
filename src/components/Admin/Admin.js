import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class Admin extends Component {

  constructor(props){
    super(props);
    this.state={
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

  handleLanguage = e => {
    const key = `language${e.target.name}`;
    this.setState({ [key]: e.target.value });
  }

  addLanguage = async e => {
    e.preventDefault();
    const data = {
      name: this.state.languageName,
      img: this.state.languageImg,
      text_color: this.state.languageColor
    }
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/alphabets/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    console.log(response.status);
  }

  handleLesson = e => {
    const key = `lesson${e.target.name}`;
    this.setState({ [key]: e.target.value });
  }

  addLesson = async e => {
    e.preventDefault();
    const data = {
      name: this.state.lessonName,
      language: this.state.lessonLanguage,
      lesson_text: this.state.lessonText,
      level: this.state.lessonLevel
    }
    if (this.state.lessonIcon !== '') data.icon = this.state.lessonIcon;
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/lessons/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    console.log(response.status);
  }

  handleQuestion = e => {
    const key = `question${e.target.name}`;
    this.setState({ [key]: e.target.value });
  }

  addQuestion = async e => {
    e.preventDefault();
    const data = {
      name: this.state.questionName,
      question_text: this.state.questionText,
      answer: this.state.questionAnswer
    }
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/questions/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const question = await response.json()
    console.log(question);

    const response2 = await fetch(`https://phonitaur-backend.herokuapp.com/lesson/${this.state.questionLesson}`);
    const json = await response2.json();
    json.questions = [...json.questions, question];
    const response3 = await fetch(`https://phonitaur-backend.herokuapp.com/lesson/${this.state.questionLesson}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(json)
    });
    console.log(response3.status);
  }

  render() {
    return(
      <div>
        <Navbar leftButton={'Home'} leftLink={`/home`} rightButton={'Catalog'} rightLink={`/catalog`} />
        <h4 className='text-white mx-auto text-center my-4'>Admin</h4>
        <div className='container'>
          <div className='row'>
            <div className='col'>
            <form onSubmit={this.addLanguage} className='mb-4'>
              <input type='text' name='Name' onChange={this.handleLanguage} value={this.languageName} placeholder='Language name' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Img' onChange={this.handleLanguage} value={this.languageImg} placeholder='Language image' autoComplete='off' className='my-2 form-control'/>
              <input type='text' name='Color' onChange={this.handleLanguage} value={this.languageColor} placeholder='Language text color' autoComplete='off' className='my-2 form-control'/>
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

export default Admin;
