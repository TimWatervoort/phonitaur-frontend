import React, { Component } from 'react';

class Progress extends Component {
  render(){

    const { color, number } = this.props;

    return(
      <div className='col p-0 prog-sect'>
        <div className='card p-0' id='prog-card'>
          <div className={`pb-0 pt-2 ${color==='undone' ? 'lesson-card-body' : 'done-card-body'}`}>

          </div>
        </div>
      </div>
    )
  }
}

export default Progress;
