import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Transcripter.css';
import Navbar from '../Navbar/Navbar';

class Transcripter extends Component {

  constructor(props){
    super(props);
    this.state = {
      from: 'Select an alphabet',
      to: 'Select an alphabet',
      fromText: '',
      toText: ''
    }
  }

  handleChange = e => {
    const key = e.target.name;
    this.setState({ [key]: e.target.value });
  }

  render(){
    return(
      <div>
      <Navbar leftButton={'My Profile'} leftLink={'/home'} rightButton={'Course Catalog'} rightLink={'/catalog'}/>
        <div className='container'>
          <div className='row'>
            <div className='col'>

              <h3 className='trans-header text-white text-center my-4'>Transcripter</h3>

            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='card' id='trans-card'>
                <div className='card-body trans-card-body'>
                  <h5 className='trans-header text-white'>From:</h5>
                  <select name='from' value={this.state.from} onChange={this.handleChange} className='trans-header form-control my-1'>
                    <option>Cyrillic</option>
                    <option>Arabic</option>
                    <option>International Phonetic Alphabet</option>
                    <option>English</option>
                  </select>
                  <textarea value={this.state.fromText} onChange={this.handleChange} className='form-control mb-2' name='fromText'/>


                  <h5 className='trans-header text-white'>To:</h5>
                  <select name='to' value={this.state.to} onChange={this.handleChange} className='trans-header form-control my-1'>
                    <option>Cyrillic</option>
                    <option>Arabic</option>
                    <option>International Phonetic Alphabet</option>
                    <option>English</option>
                  </select>
                  <textarea value={this.state.toText} onChange={this.handleChange} className='form-control' name='toText'/>

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
  alphabet: state.alphabet
});

export default connect(mapStateToProps)(Transcripter);
