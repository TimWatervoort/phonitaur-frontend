import React, { Component } from 'react';
import minotaur from '../images/phonitaur_transparent.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <div className='container'>
        <div className='row mb-5'>
          <div className='col'>
            <h1 className='phon-header text-center'>Phonitaur</h1>
            <h1 className='phon-second text-center'>фонитор</h1>
            <h1 className='phon-third text-center'>fɑnɪtɑɹ</h1>
            <h1 className='phon-fourth text-center'>فنيتار</h1>        
          </div>
        </div>
        <div className='row'>
          <div className='col mx-auto text-center'>
            <img className='phonitaurImg' src={minotaur} alt='phonitaur'/>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Landing;
