import React, { Component } from 'react';
import phonitaur_img from '../../images/phonitaur_transparent.png';
import './About.css';

class About extends Component {
  render() {
    return(
      <div>

       <div className='container mt-4'>

        <div className='row mb-3'>
          <div className='col-6 text-center'>
            <h3 className='tech-txt'><a className='tim-link' href='https://linkedin.com/in/timwatervoort'>LinkedIn: /timwatervoort</a></h3>
          </div>

          <div className='col-6 text-center'>
            <h3 className='tech-txt'><a className='tim-link' href='https://github.com/TimWatervoort'>GitHub: /TimWatervoort</a></h3>
          </div>

        </div>

          <div className='row'>

            <div className='col-4 text-center'>
              <h4 className='user-text text-white'>Frontend Tech</h4>
              <h5 className='tech-txt main-tech'>React.js</h5>
              <h5 className='tech-txt'>Redux.js</h5>
              <h5 className='tech-txt'>JavaScript</h5>
              <h5 className='tech-txt'>HTML5</h5>
              <h5 className='tech-txt'>CSS3</h5>
              <h5 className='tech-txt'>Bootstrap</h5>
              <h5 className='tech-txt'>jsonwebtoken</h5>
              <h5 className='tech-txt'>React-Router</h5>
            </div>

            <div className='col-4'>
              <img className='img-fluid' src={phonitaur_img}/>
            </div>

            <div className='col-4 text-center'>
              <h4 className='user-text text-white'>Backend Tech</h4>
              <h5 className='tech-txt main-tech'>Django</h5>
              <h5 className='tech-txt'>Python</h5>
              <h5 className='tech-txt'>PostgreSQL</h5>
              <h5 className='tech-txt'>Django REST Framework</h5>
              <h5 className='tech-txt'>Simple JWT</h5>
              <h5 className='tech-txt'>Node.js</h5>
              <h5 className='tech-txt'>Express.js</h5>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default About;
