import React, { Component } from 'react';
import { connect } from 'react-redux';
import LanguageCard from '../LanguageCard/LanguageCard';
import Navbar from '../Navbar/Navbar';

class Catalog extends Component {

  render() {

    const { languages } = this.props;

    return (
      <div>
      <Navbar />
        <div>
          <h4 className='text-white text-center lang-text'>Course Catalog</h4>
        </div>
        <div className='container'>
          <div className='row'>
            {Array.isArray(languages) ? languages.map((x,i) => <LanguageCard key={i} alphabet={x} />) : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  languages: state.languages
});

export default connect(mapStateToProps)(Catalog);
