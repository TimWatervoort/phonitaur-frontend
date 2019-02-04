import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCourses } from '../../actions/index';
import './Home.css';
import LanguageCard from '../LanguageCard/LanguageCard';
import Navbar from '../Navbar/Navbar';
import { Link, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import LanguageRemover from '../LanguageRemover/LanguageRemover';
import ProfileCard from '../ProfileCard/ProfileCard';
import EditableCard from '../ProfileCard/EditableCard';

class Home extends Component {

  constructor(props) {
    super(props);
    const { user } = this.props
    this.state = {
      username: user.username,
      img: user.img,
      mother_alphabet: user.mother_alphabet,
      removalOn: false,
      editOn: false
    }
  }

  toggleRemoval = e => {
    //change the cards from language cards to remover cards
    e.preventDefault();
    this.setState({
      removalOn: !this.state.removalOn
    });
  }

  toggleEdit = e => {
    //toggle the profile card and the editable card
    e.preventDefault();
    const { user } = this.props
    this.setState({
      username: user.username,
      img: user.img,
      mother_alphabet: user.mother_alphabet,
      removalOn: false,
      editOn: !this.state.editOn
    });
  }

  handleChange = e => {
    //set the values in state
    const key = e.target.name;
    const value = e.target.value.replace(/\s/g, '');
    this.setState({
      [key]: value
    });
  }

  onSubmit = e => {
    //send edits to the backend
    e.preventDefault();
    const { user, updateCourses } = this.props
    const data = {
      id: user.id,
      username: this.state.username,
      img: this.state.img,
      mother_alphabet: this.state.mother_alphabet,
      password: user.password,
      languages: user.languages,
      lessons: user.lessons,
      email: user.email
    }
    updateCourses(data);
    this.setState({
      username: user.username,
      img: user.img,
      mother_alphabet: user.mother_alphabet,
      removalOn: false,
      editOn: false
    })
  }

  render() {

    const { user } = this.props;

    let cardChoice = null;
    if (user.languages && this.state.removalOn) {
      cardChoice = user.languages.map((x,i) => <LanguageRemover key={i} alphabet={x} />);
    } else if (user.languages && !this.state.removalOn) {
      cardChoice = user.languages.map((x,i) => <LanguageCard key={i} alphabet={x} />);
    }

    return(
      <div>
        <Navbar leftButton={'Log Out'} leftLink={'/home'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>

        {user === 'Getting user' ? <h1 className='spinnyBoi mt-5 text-center mx-auto user-text text-white'> <i className="fas fa-cog"></i> </h1> : null}

          <div className='row'>

            {!Cookies.get('phonitoken') ? <Redirect to='/' /> : null}

            {!this.state.editOn ? <ProfileCard user={user} /> : <EditableCard user={user} handleChange={this.handleChange} onSubmit={this.onSubmit}/>}

            <div className='col-lg-4 col-md-12'>
              <div id='linksCard' className='card user-card mt-4'>
                <div className='card-body user-card-body'>
                  <Link to='/catalog' className='links-btn mt-4 btn-text btn btn-danger'>View Course Catalog</Link>
                  <button onClick={this.toggleEdit} className='links-btn mt-3 btn-text btn btn-danger'>{this.state.editOn ? 'Done Editing' : 'Edit Profile'}</button>
                  <button onClick={this.toggleRemoval} className='links-btn my-3 btn-text btn btn-danger'>{this.state.removalOn ? 'Done Removing' : 'Remove a Course'}</button>
                </div>
              </div>
            </div>

          </div>

          <div className='mt-3 row'>
            {cardChoice}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  updateCourses
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
