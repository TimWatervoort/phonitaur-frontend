import React, { Component } from 'react';
import './LanguageCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons } from '../../actions/index';

class LanguageCard extends Component {

  constructor(props){
    super(props);
    this.retrieveLessons = this.retrieveLessons.bind(this);
  }

  retrieveLessons(){
    const { alphabet, getLessons } = this.props;
    getLessons(alphabet.id);
  }

  render(){
    const { alphabet } = this.props;
    return(
      <div className='col-lg-4 col-md-12'>
        <div className={`${alphabet.text_color} card lang-card mt-2 mb-2 text-center`}>
        <img className="card-img lang-card-img" src={`${alphabet.img}`} alt="Alphabet"/>
          <div className="d-flex flex-column card-img-overlay">
            <h3 className='card-title lang-text'><strong>{alphabet.name}</strong></h3>

            <Link to={`learn/${alphabet.id}`} className='mt-auto mx-auto cont-button btn btn-danger lang-text'>Continue!</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getLessons
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LanguageCard);
