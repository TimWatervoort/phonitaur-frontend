import React, { Component } from 'react';
import minotaur from '../../images/phonitaur_transparent.png';
import './Landing.css';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className='set-bg'>
        <div className='container'>
        <div className='row mb-5'>
          <div className='col'>
            <h1 className='phon-header text-center'>Phonitaur</h1>
            <h1 className='phon-second text-center'>фонитюр</h1>
            <h1 className='phon-third text-center'>fɑnɪtɔɹ</h1>
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
            <Link to='/home' ><button className='enter-button'>Enter Site</button></Link>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <span className='mb-0 or'> or </span>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <Link to='/transcripter'><button className='enter-button'>Enter Transcripter</button></Link>
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Landing;
