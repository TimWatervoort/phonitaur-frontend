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

    let leftSide;
    if (leftButton === 'Log Out') {
      leftSide = <button onClick={this.sendLogout} className='btn nav-head nav-but'>Log Out</button>;
    } else {
      leftSide = <Link to={leftLink} className='nav-head nav-but'>{leftButton}</Link>;
    }

    return(
      <div>
        <nav className='navbar my-nav'>
          <div className='container'>
            <div className='col-4 text-center'>
              {leftSide}
            </div>
            <div className='col-4 text-center'>
              <Link to='/' className='nav-title nav-but'>phonitaur</Link>
            </div>
            <div className='col-4 text-center'>
              <Link to={rightLink} className='nav-head nav-but'>{rightButton}</Link>
            </div>
          </div>
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
