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
      lessonIcon: ''
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
    const response = await fetch(`https://phonitaur-backend.herokuapp.com/alllessons/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    console.log(response.status);
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

          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Admin;
