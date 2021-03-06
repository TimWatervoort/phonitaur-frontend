import React, { Component } from 'react';
import './LanguageRemover.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons, updateCourses } from '../../actions/index';
import arabia from '../../images/arabia.jpg';
import holland from '../../images/holland.jpg';
import russia from '../../images/russia.jpg';
import ipa from '../../images/ipa.jpg';
import germany from '../../images/germany.jpg';

class LanguageRemover extends Component {

  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(){
    //remove the course from the user's roster
    const { alphabet, user, updateCourses } = this.props;
    user.languages = user.languages.filter(x => x.name !== alphabet.name)
    updateCourses(user);
  }

  render(){

    const { alphabet } = this.props;

    let image = null;
    //set the image for the card
    if (alphabet.name === 'Cyrillic') image = russia;
    if (alphabet.name === 'Arabic') image = arabia;
    if (alphabet.name === 'Dutch') image = holland;
    if (alphabet.name === 'International Phonetic Alphabet') image = ipa;
    if (alphabet.name === 'German') image = germany;

    let button = <button onClick={this.remove} className='mt-auto mx-auto cont-button btn btn-danger btn-text'>Remove Course</button>;

    return(
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className={`${alphabet.text_color} card mx-auto lang-card mt-2 mb-2 text-center`}>
        <img className="card-img lang-card-img" src={image} alt="Alphabet"/>
          <div className="d-flex flex-column card-img-overlay">
            <h3 className='card-title lang-text'><strong>{alphabet.name}</strong></h3>

            {button}

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
  getLessons,
  updateCourses
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LanguageRemover);
