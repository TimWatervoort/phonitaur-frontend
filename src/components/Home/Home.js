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
            <div className='col text-center'>
              <div className='card user-card mt-4'>
                <div className='card-body user-card-body'>

                  <div className='row'>
                    <div className='col-4'>
                      <img className="user-img" src={user.img ? user.img : minotaur} alt="User"/>
                    </div>
                    <div className='col-8 text-left'>
                      <h3 className='card-title user-text'>{user.username}</h3>
                      <h4 className='card-subtitle text-muted user-text'>{user.mother_alphabet}</h4>
                      <p className='mt-3 card-text user-text'>Alphabets learning: {user.languages ? user.languages.length : null}</p>
                      <p className='mt-3 card-text user-text'>Alphabets learned: </p>
                    </div>
                  </div>

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
