import React, { Component } from 'react';
import minotaur from '../../images/phonitaur_transparent.png';
import './Landing.css';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

class Landing extends Component {
  render() {

    return (
      <div className='set-bg'>
        <div className='container mt-3'>
        <div className='row mb-5'>
          <div className='col'>
            <h1 className='phon-header text-center'>P h o n i t a u r</h1>
            <h1 className='phon-second text-center'>фонитюр</h1>
            <h1 className='phon-third text-center'>fɑnɪtɔɹ</h1>
            <h1 className='mb-5 phon-fourth text-center'>فنيتار</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col mx-auto text-center'>
            <img className='phonitaurImg' src={minotaur} alt='phonitaur'/>
          </div>
        </div>

        <div className='row mt-0'>
          <div className='col text-center'>
            <Link to={Cookies.get('phonitoken') ? '/home' : '/auth'} ><button className='enter-button btn'>Learn</button></Link>
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Landing;
