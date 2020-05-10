import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { hates } from './hates.reducer';

const rootReducer = combineReducers({
  authentication,
  hates,
});

export default rootReducer;