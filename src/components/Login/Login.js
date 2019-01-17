import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
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
    console.log(this.state);
    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    return(
      <div>
        <Navbar leftButton={'Back To Home'} leftLink={'/'} rightButton={'Transcripter'} rightLink={'/transcripter'}/>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <div className='card mt-3' id='user-card'>
                <div className='card-body user-card-body'>

                  <h3 className='card-title user-text text-white text-center'>Login</h3>

                  <form onSubmit={this.sendLogin}>

                    <div className='row'>
                      <div className='col-2 mt-2'>
                        <h5 className='text-white user-text'>Username:</h5>
                      </div>
                      <div className='col-10'>
                        <input className='form-control' value={this.state.username} onChange={this.setValue} name='username' autoComplete='off' type='text' placeholder='username'/>
                      </div>
                    </div>

                    <div className='row mt-2'>
                      <div className='col-2 mt-2'>
                        <h5 className='text-white user-text'>Password:</h5>
                      </div>
                      <div className='col-10'>
                        <input className='form-control' value={this.state.password} onChange={this.setValue} name='password' autoComplete='off' type='text' placeholder='password'/>
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
  user: state.user
});

export default connect(mapStateToProps)(Login);
