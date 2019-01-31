import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import './Navbar.css';

class Navbar extends Component {

  sendLogout = e => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render(){

    const { leftButton, rightButton, leftLink, rightLink } = this.props;

    //let the navbar be changed, depending on what page the user is on
    let leftSide;
    if (leftButton === 'Log Out') {
      leftSide = <button onClick={this.sendLogout} className='btn nav-head nav-but'>Log Out</button>;
    } else {
      leftSide = <Link to={leftLink} className='btn nav-head nav-but'>{leftButton}</Link>;
    }

    let respoNav = <div className='container'>
      <div className='col-md-4 col-sm-1 text-center'>
        {leftSide}
      </div>
      <div className='col-md-4 col-sm-10 text-center'>
        <Link to='/' className='nav-title nav-but'>p h o n i t a u r</Link>
      </div>
      <div className='col-md-4 col-sm-1 text-center'>
        <Link to={rightLink} className='btn nav-head nav-but'>{rightButton}</Link>
      </div>
    </div>;
    if (window.innerHeight > window.innerWidth) {
      respoNav=<div className='container'><div className='col-md-4 col-sm-10 text-center'><Link to='/' className='nav-title nav-but'>p h o n i t a u r</Link></div> <div className='col-md-4 col-sm-1 text-center'>{leftSide}</div><div className='col-md-4 col-sm-1 text-center'><Link to={rightLink} className='btn nav-head nav-but'>{rightButton}</Link></div></div>
    }

    return(
      <div>
        <nav className='navbar my-nav'>
          {respoNav}
        </nav>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
