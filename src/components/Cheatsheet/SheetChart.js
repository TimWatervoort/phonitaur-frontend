import React, { Component } from 'react';

class SheetChart extends Component {
  render() {

    const { item } = this.props;

    return(
      <div className='row'>
        <div className='col-4'>
          <h4 className='user-text text-white'>{item.char}</h4>
        </div>

        <div className='col-4'>
          <h4 className='user-text text-white'><i className="fas fa-volume-up"></i></h4>
        </div>

        <div className='col-4'>
          <h4 className='user-text text-white'>{item.english}</h4>
        </div>

      </div>
    )
  }
}

export default SheetChart;
