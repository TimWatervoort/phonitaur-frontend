import React, { Component } from 'react';
import minotaur from '../images/phonitaur_transparent.png';
import './Landing.css';
import bgimg from '../images/bgimg.jpg';

class Landing extends Component {
  render() {
    return (
      <div className='set-bg'>
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

        <div className='row mt-0'>
          <div className='col text-center'>
            <button className='enter-button'>Enter Site</button>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <span className='mb-0 or'> or </span>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <button className='enter-button'>Enter Transcripter</button>
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Landing;
