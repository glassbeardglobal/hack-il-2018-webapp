import { GET_EXPERIENCES, RECIEVE_EXPERIENCES } from './actions';
const defaultState = {
  fetching: false,
  fetchSuccess: false,
  errorMessage: null,
  experiences: [],
};

function experiences(state = defaultState, action) {
  switch (action.type) {
    case GET_EXPERIENCES:
      return Object.assign({}, state, { fetching: true });
    case RECIEVE_EXPERIENCES:
      if (action.success) {
        return Object.assign({}, state, {
          fetching: false,
          fetchSuccess: true,
          experiences: action.experiences,
        });
      } else {
        return Object.assign({}, state, {
          fetching: false,
          fetchSuccess: false,
          errorMEssage: action.message,
        });
      }
    default:
      return state;
  }
}

export default experiences;
