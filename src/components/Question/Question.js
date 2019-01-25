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

  render() {

    const { question, alph } = this.props;


    return (
    <div>
      <form onSubmit={this.checkAnswer} className='mt-2'>
        <p className='ml-1 user-text text-white'>{question.question_text}</p>
        <input value={this.state.value} onChange={this.handleChange} className={`form-control ${this.state.answer}`} placeholder='type your answer' autoComplete='off'/>
      </form>

      {alph !== 'Dutch' ? <button onClick={this.toggleKeys} className='btn btn-danger mt-1 mb-4'><i className="fas fa-keyboard"></i></button> : null}
      <button onClick={this.checkAnswer} className='btn btn-danger user-text mt-1 mb-4 mx-1'>Submit</button>
      <div hidden={this.state.hidden}>
        {alph !== 'Dutch' ? <Keyboard fkb={this.addToInput} alph={alph} /> : null}
      </div>
    </div>
    )
  }
}

export default Question;
