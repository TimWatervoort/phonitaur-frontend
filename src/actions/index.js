import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

export const GETTING_USER = 'GETTING_USER';
export const GET_USER = 'GET_USER';
export const GETTING_LANGUAGES = 'GETTING_LANGUAGES';
export const GET_LANGUAGES = 'GET_LANGUAGES';
export const GETTING_LESSONS = 'GETTING_LESSONS';
export const GET_LESSONS = 'GET_LESSONS';
export const GETTING_ALPHABET = 'GETTING_ALPHABET';
export const GET_ALPHABET = 'GET_ALPHABET';
export const GETTING_LESSON = 'GETTING_LESSON';
export const GET_LESSON = 'GET_LESSON';

const apiUrl = 'http://localhost:8000';

export const getUser = () => {
  return async dispatch => {
    if (Cookies.get('phonitoken')) {
      dispatch({type: GETTING_USER});
      const decoded = jwt.decode(Cookies.get('phonitoken'));
      const response = await fetch(`${apiUrl}/users/${decoded.user_id}`);
      const json = await response.json();
      dispatch({
        type: GET_USER,
        payload: json
      });
    }
  }
}

export const getLanguages = () => {
  return async dispatch => {
    dispatch({type: GETTING_LANGUAGES});
    const response = await fetch(`${apiUrl}/alphabets`);
    const json = await response.json();
    dispatch({
      type: GET_LANGUAGES,
      payload: json
    });
  }
}

export const getLessons = id => {
  return async dispatch => {
    dispatch({type: GETTING_LESSONS});
    const response = await fetch(`${apiUrl}/lessons/${id}`);
    const json = await response.json();
    dispatch({
      type: GET_LESSONS,
      payload: json
    });
  }
}

export const getAlphabet = id => {
  return async dispatch => {
    dispatch({type: GETTING_ALPHABET});
    const response = await fetch(`${apiUrl}/alphabets/${id}`);
    const json = await response.json();
    dispatch({
      type: GET_ALPHABET,
      payload: json
    });
  }
}

export const getLesson = id => {
  return async dispatch => {
    dispatch({type: GETTING_LESSON});
    const response = await fetch(`${apiUrl}/lesson/${id}`);
    const json = await response.json();
    dispatch({
      type: GET_LESSON,
      payload: json
    });
  }
}

export const updateCourses = data => {
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/${data.id}/`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const json = await response.json();
    console.log('response', response);
    dispatch({
      type: GET_USER,
      payload: json
    });
  }
}
