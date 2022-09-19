const API = 'https://om1qo0yo60.execute-api.us-east-1.amazonaws.com/dev';

/**
 * Function returns url and data object to add user
 * @param {*} data 
 * @returns 
 */
export const postUser = {
    url: API + '/users'
}
export const listUser = {
    url: `${API}/users`,
    method: 'GET'
}
export const getUserById = (userId) => {
    return {
        url: `${API}/users/${userId}`
    }
}
export const deleteUser = (userId) => {
    return {
        url: `${API}/users/${userId}`,
        method: 'DELETE'
    }
}
