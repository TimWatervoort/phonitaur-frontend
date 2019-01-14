import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Home.css';
import minotaur from '../../images/phonitaur_transparent.png';
import LanguageCard from '../LanguageCard/LanguageCard';

class Home extends Component {
  render() {

    const dummyList = [{name: 'Cyrillic', img:'https://cdn.pixabay.com/photo/2018/12/26/05/13/moscow-3895333_960_720.jpg', textColor: 'text-dark'}, {name: 'Arabic', img: 'https://cdn.pixabay.com/photo/2017/09/22/09/48/desert-2774945_960_720.jpg', textColor: 'text-white'}, {name: 'International Phonetic Alphabet', img:'https://cdn.pixabay.com/photo/2017/06/14/08/20/map-of-the-world-2401458_960_720.jpg', textColor: 'text-black'}]
    const alphaList = dummyList.map((x,i) => <LanguageCard key={i} alphabet={x} />);

    return(
      <div>
        <div className='container'>

          <div className='row'>
            <div className='col text-center'>
              <div className='card user-card mt-4'>
                <div className='card-body user-card-body'>

                  <div className='row'>
                    <div className='col-4'>
                      <img className="user-img" src={minotaur} alt="User"/>
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
          </div>

          <div className='mt-3 row'>
            {alphaList}
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
