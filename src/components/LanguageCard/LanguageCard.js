import React, { Component } from 'react';
import './LanguageCard.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons, addCourse } from '../../actions/index';

class LanguageCard extends Component {

  constructor(props){
    super(props);
    this.retrieveLessons = this.retrieveLessons.bind(this);
    this.add = this.add.bind(this);
  }

  add(){
    const { alphabet, user, addCourse } = this.props;
    user.languages = [...user.languages, alphabet];
    addCourse(user);
  }

  retrieveLessons(){
    const { alphabet, getLessons } = this.props;
    getLessons(alphabet.id);
  }

  render(){

    const { alphabet, user } = this.props;

    let button = <button onClick={this.add} className='mt-auto mx-auto cont-button btn btn-danger lang-text'>Add</button>;

    for (var i = 0; i < user.languages.length; i++) {
      if (user.languages[i].name === alphabet.name) {
        button = <Link to={`learn/${alphabet.id}`} className='mt-auto mx-auto cont-button btn btn-danger lang-text'>Continue!</Link>;
      }
    }

    return(
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className={`${alphabet.text_color} card mx-auto lang-card mt-2 mb-2 text-center`}>
        <img className="card-img lang-card-img" src={`${alphabet.img}`} alt="Alphabet"/>
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
  addCourse
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LanguageCard);
