import { combineReducers } from 'redux';
import authReducer from './auth.reducers';
import dashboardReducer from './dashboard.reducers';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  auth: authReducer,
  videos: dashboardReducer,
  routing: routerReducer
});

export default rootReducer;
