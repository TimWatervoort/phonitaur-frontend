import React, { Component } from 'react';

class CyrillicKeyboard extends Component {

  handleClick = e => {
    console.log(e.target.innerText);
  }

  render() {

    const alphabet = ['Е', 'А', 'О', 'Ю', 'Ё', 'Ь', 'Ы', 'Я', 'И', 'Й', 'У', 'Э', 'В', 'Г', 'Д', 'Ж', 'З', 'Р', 'С', 'Т', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Б', 'Џ', 'К', 'Л', 'М', 'Н', 'П'];

    return(
      <div className='card mx-auto my-2' id='question-card'>
        <div className='card-body lesson-card-body'>
          <div className='mx-auto text-center'>
            <h4 className='mx-auto text-white user-text card-title'>Keyboard</h4>
            {alphabet.map((x,i) => <span onClick={this.handleClick} key={i} className='user-text text-white mx-2'>{x}</span>)}
          </div>
        </div>
      </div>
    )
  }
}

export default CyrillicKeyboard;
