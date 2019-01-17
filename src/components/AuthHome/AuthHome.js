import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './AuthHome.css';
import Navbar from '../Navbar/Navbar'

class AuthHome extends Component {
  render(){
    return(
      <div>
        <Navbar leftButton={'Back To Home'} leftLink={'/'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container mt-5'>

          <div className='row'>
            <div className='col text-center'>
              <Link to='/login' className='btn btn-danger auth-button user-text text-center text-white'>Log In</Link>
            </div>
          </div>

          <div className='row my-3'>
            <div className='col text-center'>
              <h4 className='user-text text-center text-white'>or</h4>
            </div>
          </div>

          <div className='row'>
            <div className='col text-center'>
              <Link to='/signup' className='btn btn-danger auth-button user-text text-center text-white'>Sign Up</Link>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default AuthHome;
