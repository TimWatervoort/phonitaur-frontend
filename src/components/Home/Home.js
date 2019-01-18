import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import minotaur from '../../images/phonitaur_transparent.png';
import LanguageCard from '../LanguageCard/LanguageCard';
import Navbar from '../Navbar/Navbar';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import LanguageRemover from '../LanguageRemover/LanguageRemover';

class Home extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const { user } = this.props;

    return(
      <div>
        <Navbar leftButton={'Log Out'} leftLink={'/home'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>

          <div className='row'>

            {!Cookies.get('phonitoken') ? <Redirect to='/' /> : null}

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
                  <Link to='/catalog' className='links-btn mt-3 user-text btn btn-danger'>View Course Catalog</Link>
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
  user: state.user,
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
