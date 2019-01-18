import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/auth';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props)
    this.state={
      username: '',
      password: ''
    }
  }

  setValue = e => {
    const key = e.target.name;
    const value = e.target.value.replace(/\s/g, '');
    this.setState({
      [key]: value
    });
  }

  sendLogin = e => {
    e.preventDefault();
    const { login } = this.props;
    login(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {

    const { auth } = this.props;

    return(
      <div>
        <Navbar leftButton={'Back To Home'} leftLink={'/'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>

        {auth === 'Login success.' ? <Redirect to='/home'/> : null}

          <div className='row'>
            <div className='col'>

              <div className='card mt-3' id='user-card'>
                <div className='card-body user-card-body'>

                  <h3 className='mb-4 card-title user-text text-white text-center'>Login</h3>

                  <form onSubmit={this.sendLogin}>

                    <div className='row'>
                      <div className='col-lg-2 col-md-12 mt-2'>
                        <h5 className='text-white user-text'>Username:</h5>
                      </div>
                      <div className='col-lg-10 col-md-12'>
                        <input className='form-control' value={this.state.username} onChange={this.setValue} name='username' autoComplete='off' type='text' placeholder='username'/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-lg-2 col-md-12 mt-2'>
                        <h5 className='text-white user-text'>Password:</h5>
                      </div>
                      <div className='col-lg-10 col-md-12'>
                        <input className='form-control' value={this.state.password} onChange={this.setValue} name='password' autoComplete='off' type='password' placeholder='password'/>
                      </div>
                    </div>

                    <div className='row mt-4'>
                      <button type='submit'
                       className='mx-auto btn btn-danger user-text'>Submit</button>
                    </div>

                  </form>
                </div>
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
  login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
