import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
  render(){

    const { leftButton, rightButton, leftLink, rightLink } = this.props;

    return(
      <div>
        <nav className='navbar my-nav'>
          <Link to={leftLink} className='nav-head text-white mx-auto'>{leftButton}</Link>
          <Link to='/' className='mx-auto nav-head nav-top'>PHONITAUR</Link>
          <Link to={rightLink} className='nav-head text-white mx-auto'>{rightButton}</Link>
        </nav>
      </div>

    )
  }
}

export default Navbar;
