import React, { Component } from 'react';

class Progress extends Component {
  render(){

    const { color, number } = this.props;

    return(
      <div className='col prog-sect'>
        <div className='card p-0' id='lesson-card'>
          <div className={`pb-0 pt-2 card-body ${color==='undone' ? 'lesson-card-body' : 'done-card-body'}`}>
            <h5 className='p-0 text-white prog-text text-center'>Part {number}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Progress;
