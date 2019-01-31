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

const apiUrl = 'https://phonitaur-backend.herokuapp.com';

export const getUser = () => {
  //if the user is logged in, get the user's data using the id in the jwt token
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
  //get all alphabets for the language card components to use
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
  //get all lessons for an alphabet for the lesson cards to use
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

export const getAlphabet = name => {
  // get one alphabet, mostly for printing the name
  return async dispatch => {
    dispatch({type: GETTING_ALPHABET});
    const response = await fetch(`${apiUrl}/alphabets/${name}`);
    const json = await response.json();
    dispatch({
      type: GET_ALPHABET,
      payload: json
    });
  }
}

export const getLesson = id => {
  //get one lesson with its questions
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
  //update a user's information, generally used for adding courses and lessons
  return async dispatch => {
    const response = await fetch(`${apiUrl}/users/${data.id}/`,{
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })
    const json = await response.json();
    dispatch({
      type: GET_USER,
      payload: json
    });
  }
}
