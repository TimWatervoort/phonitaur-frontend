import React, { Component } from 'react';
import './LanguageCard.css';
import { Link } from 'react-router-dom';

class LanguageCard extends Component {
  render(){
    const { alphabet } = this.props;
    return(
      <div className='col-lg-4 col-md-12'>
        <div className={`${alphabet.text_color} card lang-card mt-2 mb-2 text-center`}>
        <img className="card-img lang-card-img" src={`${alphabet.img}`} alt="Alphabet"/>
          <div className="d-flex flex-column card-img-overlay">
            <h3 className='card-title lang-text'><strong>{alphabet.name}</strong></h3>

            <Link to={`lessons/${alphabet.id}`} className='mt-auto mx-auto cont-button btn btn-danger lang-text'>Continue!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LanguageCard;
