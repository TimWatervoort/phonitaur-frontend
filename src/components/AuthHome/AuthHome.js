import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthHome.css';
import Navbar from '../Navbar/Navbar'

class AuthHome extends Component {
  render(){
    return(
      <div>
        <Navbar leftButton={'Back To Home'} leftLink={'/'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='user-card-body container my-5'>

          <div className='row pt-4 mb-3'>
            <div className='col text-center'>
              <h4 className='user-text text-white'>Welcome to Phonitaur!</h4>
              <h5 className='mt-3 user-text text-white'>Phonitaur is an alphabet-learning and pronounciation-learning site.</h5>
              <h5 className='mb-3 user-text text-white'>If you'd like to learn Cyrillic without learning Russian or learn how to pronounce those crazy-looking words in Dutch, you've come to the right place!</h5>
              <h5 className='my-3 user-text text-white'>To continue, please:</h5>
            </div>
          </div>

          <div className='row'>
            <div className='col text-center'>
              <Link to='/login' className='btn btn-danger auth-button text-center text-white'>Log In</Link>
            </div>
          </div>

          <div className='row my-3'>
            <div className='col text-center'>
              <h4 className='user-text text-center text-white'>or</h4>
            </div>
          </div>

          <div className='row pb-4'>
            <div className='col text-center'>
              <Link to='/signup' className='btn btn-danger auth-button text-center text-white'>Sign Up</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AuthHome;
