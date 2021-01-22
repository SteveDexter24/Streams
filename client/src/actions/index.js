import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from './types';
import history from '../history';
// Put action creators here
export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

// redux thunk, second argument i.e after dispatch, getState, other state in redux
export const createStream = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await streams.post('/streams', { ...formValues, userId });
	dispatch({ type: CREATE_STREAM, payload: response.data });

	// Do some programmatic navigation to get the user back to the root route
	// use .push('/route path') to navigate around
	history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
	const response = await streams.get('/streams');
	dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
	const response = await streams.get(`/streams/${id}`);
	dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStreams = (id, formValues) => async (dispatch) => {
	const response = await streams.put(`/streams/${id}`, formValues);
	dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStreams = (id) => async (dispatch) => {
	await streams.delete(`/streams/${id}`);
	dispatch({ type: DELETE_STREAM, payload: id });
};
