import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Transcripter.css';

class Transcripter extends Component {
  render(){
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <h1 className='trans-header'>Transcripter</h1>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Transcripter);
