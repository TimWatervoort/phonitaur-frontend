import React, { Component } from 'react';

class CyrillicKeyboard extends Component {

  constructor(props){
    super(props);
    this.state = {
      case: 'upper'
    }
  }

  handleClick = e => {
    this.props.fkb(e.target.innerText);
  }

  toggleCase = e => {
    if (this.state.case === 'upper') {
      this.setState({case: 'lower'});
    } else {
      this.setState({case: 'upper'});
    }
  }

  render() {

    const { alph } = this.props;

    let cyrillic = ['Е', 'А', 'О', 'Ю', 'Ё', 'Ь', 'Ы', 'Я', 'И', 'Й', 'У', 'Э', 'В', 'Г', 'Д', 'Ж', 'З', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Б', 'Џ', 'К', 'Л', 'М', 'Н', 'П'];

    let arabic = ['ا','ى','ي','و','ب','ة','ه','ع','ظ','ط','ض','ص','ش','س','ز','ر','ذ','د','ن','م','ل','ك','ق','ف','ج','خ','ح','ث','ت','غ', 'ء'];

    let alphabet = null;
    if (alph === 'Cyrillic') {
      alphabet = cyrillic;
    } else if (alph === 'Arabic') {
      alphabet = arabic;
    }

    if (this.state.case === 'lower') {
      for (var i = 0; i < alphabet.length; i++) {
        alphabet[i] = alphabet[i].toLowerCase();
      }
    }

    return(
      <div className='card mx-auto my-2' id='question-card'>
        <div className='card-body lesson-card-body'>
          <div className='mx-auto text-center'>
            <h4 className='mx-auto text-white user-text card-title'>Keyboard</h4>
            <h4><button className='user-text btn btn-danger' onClick={this.toggleCase}>Toggle Case</button></h4>
            {alphabet.map((x,i) => <span onClick={this.handleClick} key={i} className='user-text text-white mx-2'>{x}</span>)}
          </div>
        </div>
      </div>
    )
  }
}

export default CyrillicKeyboard;
