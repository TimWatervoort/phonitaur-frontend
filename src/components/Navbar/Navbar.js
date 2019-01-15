import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render(){
    return(
      <div>
        <nav className='navbar navbar-dark bg-dark'>
          <Link to='/' className='mx-auto nav-head nav-top'>Phonitaur</Link>
        </nav>
        <div className='container-fluid bg-dark'>
          <p className='nav-head text-center pb-2 text-white'>Know your alphabets.</p>
        </div>
      </div>

    )
  }
}

export default Navbar;
