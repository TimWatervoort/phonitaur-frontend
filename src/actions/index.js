export const GETTING_QUESTIONS = 'GETTING_QUESTIONS';
export const GET_QUESTIONS = 'GET_QUESTIONS';

const apiUrl = 'http://localhost:8000'

export const getQuestions = () => {
  return async dispatch => {
    dispatch({
      type: GETTING_QUESTIONS
    });
    const response = await fetch(`${apiUrl}/questions`);
    const json = await response.json();
    dispatch({
      type: GET_QUESTIONS,
      payload: json.message
    });
  }
}
