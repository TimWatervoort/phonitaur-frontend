import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import minotaur from '../../images/phonitaur_transparent.png';
import LanguageCard from '../LanguageCard/LanguageCard';
import Navbar from '../Navbar/Navbar';

class Home extends Component {
  render() {

    const { user } = this.props;

    return(
      <div>
        <Navbar />
        <div className='container'>

          <div className='row'>
            <div className='col-lg-8 col-md-12 text-left'>
              <div id='userCard' className='card user-card mt-4'>
                <div className='card-body user-card-body'>

                  <div className='row'>
                    <div className='col-4'>
                      <img className="user-img" src={user.img ? user.img : minotaur} alt="User"/>
                    </div>
                    <div className='col-8 text-left'>
                      <h3 className='text-white card-title user-text'>{user.username}</h3>
                      <h4 className='text-grey card-subtitle user-text'>{user.mother_alphabet} Alphabet User</h4>
                      <p className='text-white mt-3 card-text user-text'>Alphabets learning: {user.languages ? user.languages.length : null}</p>
                      <p className='text-white mt-3 card-text user-text'>Alphabets learned: 0</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div id='linksCard' className='card user-card mt-4'>
                <div className='card-body user-card-body'>
                  <button className='links-btn mt-3 user-text btn btn-danger'>Add Another Course</button>
                  <button className='links-btn mt-3 user-text btn btn-danger'>Edit Profile</button>
                  <button className='links-btn my-3 user-text btn btn-danger'>Remove a Course</button>
                </div>
              </div>
            </div>

          </div>

          <div className='mt-3 row'>
            {user.languages ? user.languages.map((x,i) => <LanguageCard key={i} alphabet={x} />) : null}
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
