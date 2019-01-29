import React, { Component } from 'react';
import './LanguageCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons, updateCourses } from '../../actions/index';
import arabia from '../../images/arabia.jpg';
import holland from '../../images/holland.jpg';
import russia from '../../images/russia.jpg';
import ipa from '../../images/ipa.jpg';

class LanguageCard extends Component {

  constructor(props){
    super(props);
    this.retrieveLessons = this.retrieveLessons.bind(this);
    this.add = this.add.bind(this);
  }

  add(){
    const { alphabet, user, updateCourses } = this.props;
    user.languages = [...user.languages, alphabet];
    updateCourses(user);
  }

  retrieveLessons(){
    const { alphabet, getLessons } = this.props;
    getLessons(alphabet.id);
  }

  render(){

    const { alphabet, user } = this.props;
    let image = null;
    if (alphabet.name === 'Cyrillic') image = russia;
    if (alphabet.name === 'Arabic') image = arabia;
    if (alphabet.name === 'Dutch') image = holland;
    if (alphabet.name === 'International Phonetic Alphabet') image = ipa;

    let button = <button onClick={this.add} className='mt-auto mx-auto cont-button btn btn-danger btn-text'>Add Course</button>;

    for (var i = 0; i < user.languages.length; i++) {
      if (user.languages[i].name === alphabet.name) {
        button = <Link to={`learn/${alphabet.name}`} className='mt-auto mx-auto cont-button btn btn-danger btn-text'>Continue!</Link>;
      }
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageCard);
