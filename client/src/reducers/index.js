import { combineReducers } from 'redux';
// re-name to formReducer using the as keyword
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
	auth : authReducer,
	form : formReducer
});
