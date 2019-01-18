import React, { Component } from 'react';
import './LanguageRemover.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLessons, updateCourses } from '../../actions/index';

class LanguageRemover extends Component {

  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(){
    const { alphabet, user, updateCourses } = this.props;
    user.languages = [...user.languages, alphabet];
    updateCourses(user);
  }

  render(){

    const { alphabet, user } = this.props;

    return(
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <div className={`${alphabet.text_color} card mx-auto lang-card mt-2 mb-2 text-center`}>
        <img className="card-img lang-card-img" src={`${alphabet.img}`} alt="Alphabet"/>
          <div className="d-flex flex-column card-img-overlay">
            <h3 className='card-title lang-text'><strong>{alphabet.name}</strong></h3>

            <button onClick={this.remove} className='mt-auto mx-auto cont-button btn btn-danger lang-text'>Remove Course</button>;

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
