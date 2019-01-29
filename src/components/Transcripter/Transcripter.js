import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Transcripter.css';
import Navbar from '../Navbar/Navbar';
import { dutchToEnglish, englishToDutch } from './EnglishDutch';
import { englishToCyrillic, cyrillicToEnglish } from './EnglishCyrillic';
import { englishToArabic, arabicToEnglish } from './EnglishArabic';

class Transcripter extends Component {

  constructor(props){
    super(props);
    this.state = {
      from: '--Select an alphabet--',
      to: '--Select an alphabet--',
      fromText: '',
      toText: ''
    }
  }


  handleChange = e => {
    const key = e.target.name;
    this.setState({ [key]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let data;
    if (this.state.from === 'Dutch' && this.state.to === 'English'){
      data = dutchToEnglish(this.state.fromText);
    } else if (this.state.from === 'English' && this.state.to === 'Dutch'){
      data = englishToDutch(this.state.fromText);
    } else if (this.state.from === 'English' && this.state.to === 'Cyrillic'){
      data = englishToCyrillic(this.state.fromText);
    } else if (this.state.from === 'Cyrillic' && this.state.to === 'English'){
      data = cyrillicToEnglish(this.state.fromText);
    } else if (this.state.from === 'English' && this.state.to === 'Arabic'){
      data = englishToArabic(this.state.fromText);
    } else if (this.state.from === 'Arabic' && this.state.to === 'English'){
      data = arabicToEnglish(this.state.fromText);
    } else {
      data = 'Unfortunately, this transcripter isn\'t up yet!';
    }
    this.setState({ toText: data })
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
                  <h5 className='trans-text text-white'>From:</h5>
                  <select name='from' value={this.state.from} onChange={this.handleChange} className='trans-text form-control my-1'>
                    <option disabled defaultValue>--Select an alphabet--</option>
                    <option>Cyrillic</option>
                    <option>Arabic</option>
                    <option>English</option>
                    <option>Dutch</option>
                  </select>
                  <textarea value={this.state.fromText} onChange={this.handleChange} className='form-control mb-2' name='fromText'/>


                  <h5 className='trans-text text-white'>To:</h5>
                  <select name='to' value={this.state.to} onChange={this.handleChange} className='trans-text form-control my-1'>
                    <option disabled defaultValue>--Select an alphabet--</option>
                    <option>Cyrillic</option>
                    <option>Arabic</option>
                    <option>English</option>
                    <option>Dutch</option>
                  </select>
                  <textarea value={this.state.toText} readOnly={true} className='form-control' name='toText'/>

                  <button onClick={this.handleSubmit} className='mt-2 btn btn-danger mx-auto text-center btn-text'>Transcript!</button>

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
