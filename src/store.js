import { combineReducers } from 'redux';

import experiences from './services/Experiences/reducer';

const reducer = combineReducers({
  experiences,
});

export default reducer;
