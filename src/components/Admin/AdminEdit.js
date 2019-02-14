import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class AdminEdit extends Component {
  render() {
    return(
      <div>
        <Navbar leftButton={'Home'} leftLink={`/home`} rightButton={'Catalog'} rightLink={`/catalog`} />
        <h4 className='text-white mx-auto text-center my-4'>Edit Stuff</h4>
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

export default AdminEdit;
