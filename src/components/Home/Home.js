import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import minotaur from '../../images/phonitaur_transparent.png';

class Home extends Component {
  render() {
    return(
      <div>
        <div className='container'>

          <div className='row'>
            <div className='col text-center'>
              <div className='card user-card mt-4'>
                <div className='card-body user-card-body'>

                  <div className='row'>
                    <div className='col-4'>
                      <img className="user-img" src={minotaur} alt="User image"/>
                    </div>
                    <div className='col-8 text-left'>
                      <h3 className='card-title user-text'>Username</h3>
                      <h4 className='card-subtitle text-muted user-text'>Mother alphabet</h4>
                      <p className='mt-3 card-text user-text'>Alphabets learning: </p>
                      <p className='mt-3 card-text user-text'>Alphabets learned: </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-4 col-md-12'>
                <div className='card'>
                </div>
              </div>
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
