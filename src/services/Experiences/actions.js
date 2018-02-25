import fetchExp from '../api/Experience';

export const GET_EXPERIENCES = 'GET_EXPERIENCES';
export const RECIEVE_EXPERIENCES = 'RECEIVE_EXPERIENCES';

const getExperiences = () => ({
  type: GET_EXPERIENCES
});

const recieveExperiments = (success, experiences, message) => ({
  type: RECIEVE_EXPERIENCES,
  success,
  experiences,
  message,
});

export const fetchExperiences = (formData) => {
  return (dispatch) => {
    dispatch(getExperiences());
    fetchExp(formData)
      .then(data => {
        dispatch(recieveExperiments(true, data, null));
      })
      .catch(err => {
        dispatch(recieveExperiments(false, null, err.message));
      });
  };
};
