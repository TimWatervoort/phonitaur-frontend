import React, { Component } from 'react';
import '../Home/Home.css';
import minotaur from '../../images/phonitaur_transparent.png';

class EditableCard extends Component {
  render() {

    const { user, handleChange, onSubmit } = this.props

    return(
      <div className='col-lg-8 col-md-12 text-left'>
        <div id='userCard' className='card user-card mt-4'>
          <div className='card-body user-card-body'>

            <div className='row'>
              <div className='col-4'>
                <img className="user-img img-fluid" src={user.img ? user.img : minotaur} alt="User"/>
              </div>
              <div className='col-8 text-left'>
                <form onSubmit={onSubmit}>
                  <input className='form-control user-text mb-1' type='text' name='username' onChange={handleChange} placeholder={`Username: ${user.username}`}/>
                  <input className='form-control user-text mb-1' type='text' name='mother_alphabet' onChange={handleChange} placeholder={`Native Alphabet: ${user.mother_alphabet}`}/>
                  <input className='form-control user-text' type='url' name='img' onChange={handleChange} placeholder={`Image URL: ${user.img}`}/>
                  <button className='btn btn-danger btn-text mx-auto mt-3' type='submit'>Submit</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default EditableCard;
