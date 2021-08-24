import { userService } from '../_services';
import { authHeader } from '../_helpers';

export const contactService = {
    getContacts
};

async function getContacts(pageNumber = 1, pageSize = 50) {
	const apiUrl = 'https://localhost:44396/api';
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return await fetch(`${apiUrl}/contact`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
