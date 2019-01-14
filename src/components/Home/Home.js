import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div className='container'>
          <div className='row'>
            <div className='col text-center'>
              <h1 className='home-header'>Username</h1>
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

export default connect(mapStateToProps)(Home);
