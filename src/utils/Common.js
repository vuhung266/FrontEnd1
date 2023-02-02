export const getUser = () => {
	const userStr = sessionStorage.getItem('user');
	if (userStr) return JSON.parse(userStr);
	else return null;
};

export function getToken() {
	const value = sessionStorage.getItem('token');
	return value;
}

export const setUserSession = (user) => {
	sessionStorage.setItem('token', user.apiKey);
	sessionStorage.setItem('isadmin', user.isadmin);
	sessionStorage.setItem('user', JSON.stringify(user));
};

export const removeUserSession = () => {
	sessionStorage.removeItem('token');
	sessionStorage.removeItem('user');
};

export const updateUserSession = (value) =>{
    let prevData = JSON.parse(sessionStorage.getItem('user'));
    Object.keys(value).forEach(function(val, key){
         prevData[val] = value[val];
    })
    sessionStorage.setItem('user', JSON.stringify(prevData));
}