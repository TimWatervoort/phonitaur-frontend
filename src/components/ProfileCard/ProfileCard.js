import React, { Component } from 'react';
import '../Home/Home.css';
import minotaur from '../../images/phonitaur_transparent.png';

class ProfileCard extends Component {
  render() {

    const { user } = this.props

    return(
      <div className='col-lg-8 col-md-12 text-left'>
        <div id='userCard' className='card user-card mt-4'>
          <div className='card-body user-card-body'>

            <div className='row'>
              <div className='col-4'>
                <img className="user-img my-auto img-fluid" src={user.img ? user.img : minotaur} alt="User"/>
              </div>
              <div className='col-8 text-left'>
                <h3 id='username' className='text-white user-text'>{user.username}</h3>
                <h4 className='text-grey card-subtitle user-text'>Coming from the great {user.mother_alphabet} alphabet</h4>
                <p className='text-white mt-3 card-text user-text'>Alphabets learning: {user.languages ? user.languages.length : null}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ProfileCard;
