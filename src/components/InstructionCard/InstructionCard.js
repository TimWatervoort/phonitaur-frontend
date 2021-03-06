import React, { Component } from 'react';
import './InstructionCard.css';

class InstructionCard extends Component {
  render() {
    return(
      <div className='col-12'>
        <div className='card mb-3' id='lesson-card'>
          <div className='card-body lesson-card-body'>
            <h6 className='text-white instro-text user-text'>{this.props.text}</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default InstructionCard;
