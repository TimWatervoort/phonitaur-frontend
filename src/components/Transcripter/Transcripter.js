import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Transcripter.css';
import Navbar from '../Navbar/Navbar';

class Transcripter extends Component {
  render(){
    return(
      <div>
      <Navbar leftButton={'My Profile'} leftLink={'/home'} rightButton={'Course Catalog'} rightLink={'/catalog'}/>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <h1 className='trans-header'>Transcripter</h1>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Transcripter);
