import React, { Component } from 'react';
import './Question.css';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      answer: ''
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  checkAnswer = e => {
    e.preventDefault();
    const { question } = this.props;
    const answers = question.answer.split(',');
    if (answers.includes(this.state.value)){
      this.setState({ answer: 'bg-green', value: 'Correct!' });
    } else {
      this.setState({ answer: 'bg-red', value: 'Try again.' });
    }
  }

  render() {

    const { question } = this.props;

    return (
      <form onSubmit={this.checkAnswer} className='mb-4'>
        <p className='ml-1 user-text text-white'>{question.question_text}</p>
        <input value={this.state.value} onChange={this.handleChange} className={`form-control ${this.state.answer}`} placeholder='type your answer' autoComplete='off'/>
      </form>
    )
  }
}

export default Question;
