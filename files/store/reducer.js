import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import hello from '../hello/hello';

export default combineReducers({
  routing: routerReducer,
  hello
});
