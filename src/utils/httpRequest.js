import axios from 'axios';
// import { getUser } from '~/utils/Common';
// const currentUser = getUser();

// axios.defaults.headers.common['Authorization'] = currentUser.apiKey;

const httpRequest = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
	const response = await httpRequest.get(path, options);
	return response.data;
};
export const post = async (path, options = {}) => {
	const response = await httpRequest.post(path, options);
	return response.data;
};
export const put = async (path, options = {}) => {
	const response = await httpRequest.put(path, options);
	return response.data;
};

export default httpRequest;
