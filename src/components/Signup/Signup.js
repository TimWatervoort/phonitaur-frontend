import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { signup } from '../../actions/auth';
import './Signup.css';

class Signup extends Component {

  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      confPassword: '',
      email: '',
      mother_alphabet: '',
      img: ''
    }
  }

  setValue = e => {
    const key = e.target.name;
    const value = e.target.value.replace(/\s/g, '');
    this.setState({
      [key]: value
    });
  }

  sendSignup = e => {
    e.preventDefault();
    const { signup } = this.props;
    if (this.state.password !== this.state.confPassword) { //make sure passwords match
      this.setState({
        password: '',
        confPassword: ''
      });
    } else {
      let data = {      // put state into data object
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        mother_alphabet: this.state.mother_alphabet
      }
      if (this.state.img !== '') {    //if there is an image, include it, else send null
        data.img = this.state.img;
      } else {
        data.img = null;
      }
      signup(data);       //send action
      this.setState({     //blank out fields
        username: '',
        password: '',
        confPassword: '',
        email: '',
        mother_alphabet: '',
        img: ''
      });
    }
  }

  render() {

    const { auth } = this.props;

    const signupError = <div className='mb-2 row bg-danger'><h5 className='pt-2 pb-1 text-white user-text text-center mx-auto'>Error Signing Up</h5></div>

    return(
      <div>
        <Navbar leftButton={'Back To Home'} leftLink={'/'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>

        {auth === 'Signup success.' ? <Redirect to='/login' /> : null}

          <div className='row'>
            <div className='col'>

              <div className='card mt-3' id='user-card'>
                <div className='card-body user-card-body'>

                  <h3 className='mb-4 card-title user-text text-white text-center'>Sign Up</h3>
                  {auth === 'Signup failure.' ? signupError : null}

                  <form onSubmit={this.sendSignup}>

                    <div className='row'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Username:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.username} onChange={this.setValue} name='username' autoComplete='off' type='text' placeholder='username' required/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Email:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.email} onChange={this.setValue} name='email' autoComplete='off' type='email' placeholder='email' required/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Password:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.password} onChange={this.setValue} name='password' autoComplete='off' type='password' placeholder='password' required/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Confirm Password:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.confPassword} onChange={this.setValue} name='confPassword' autoComplete='off' type='password' placeholder='confirm password' required/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Your Mother Alphabet:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.mother_alphabet} onChange={this.setValue} name='mother_alphabet' autoComplete='off' type='text' placeholder='mother alphabet' required/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-4 mt-2'>
                        <h5 className='text-white user-text'>Image URL:</h5>
                      </div>
                      <div className='col-8'>
                        <input className='sign-form form-control' value={this.state.img} onChange={this.setValue} name='img' autoComplete='off' type='url' placeholder='image url'/>
                      </div>
                    </div>

                    <div className='row mt-4'>
                      <button type='submit'
                       className='mx-auto btn btn-danger user-text'>Submit</button>
                    </div>

                  </form>
                </div>
              </div>

              <div className='row mt-5'>
                <p className='text-white user-text mx-auto'>Already have an account?</p>
              </div>

              <div className='row'>
                <Link to='/login' className='mx-auto text-white user-text'>Log In</Link>
              </div>

            </div>
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
  signup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
