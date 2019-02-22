import React, { Component } from 'react';

class Progress extends Component {
  render(){

    const { color } = this.props;

    return(
      <div className='col prog-sect'>
        <div className='card' id='lesson-card'>
          <div className={`card-body ${color==='undone' ? 'lesson-card-body' : 'done-card-body'}`}>
          </div>
        </div>
      </div>
    )
  }
}

export default Progress;
