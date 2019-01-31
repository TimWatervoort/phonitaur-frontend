import React, { Component } from 'react';
import './Question.css';
import Keyboard from '../Keyboards/Keyboard';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      answer: '',
      hidden: true
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  checkAnswer = e => {
    e.preventDefault();
    const { question } = this.props;
    const answers = question.answer.split(',');
    if (answers.includes(this.state.value.toLowerCase())){
      this.setState({ answer: 'bg-green', value: 'Correct!' });
      this.answer();
    } else {
      this.setState({ answer: 'bg-red', value: 'Try again.' });
    }
  }

  toggleKeys = e => {
    this.setState({ hidden: !this.state.hidden })
  }

  addToInput = val => {
    let newVal = `${this.state.value}${val}`;
    this.setState({ value: newVal });
  }

  answer(){
    this.props.answer(this.props.question.id);
  }

  render() {

    const { question, alph } = this.props;

    let keyboardButton = null, keyboard = null;
    if (['Cyrillic', 'Arabic', 'International Phonetic Alphabet','German'].includes(alph)){
      keyboardButton = <button onClick={this.toggleKeys} className='sub-but btn btn-danger mt-1 mb-4'><i className="fas fa-keyboard"></i></button>
      keyboard = <Keyboard fkb={this.addToInput} alph={alph} />
    }

    return (
    <div>
      <form onSubmit={this.checkAnswer} className='mt-2'>
        <p className='ml-1 user-text text-white'>{question.question_text}</p>
        <input value={this.state.value} onChange={this.handleChange} className={`user-text form-control ${this.state.answer}`} placeholder='type your answer' autoComplete='off'/>
      </form>

      {keyboardButton}
      <button onClick={this.checkAnswer} className='sub-but btn btn-danger mt-1 mb-4 mx-1'>Submit</button>
      <div hidden={this.state.hidden}>
        {keyboard}
      </div>
    </div>
    )
  }
}

export default Question;
