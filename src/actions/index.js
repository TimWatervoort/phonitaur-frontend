export const GETTING_USER = 'GETTING_USER';
export const GET_USER = 'GET_USER';
export const GETTING_LANGUAGES = 'GETTING_LANGUAGES';
export const GET_LANGUAGES = 'GET_LANGUAGES';

const apiUrl = 'http://localhost:8000';

export const getUser = () => {
  return async dispatch => {
    dispatch({type: GETTING_USER});
    const response = await fetch(`${apiUrl}/users/1`);
    const json = await response.json();
    dispatch({
      type: GET_USER,
      payload: json
    });
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
