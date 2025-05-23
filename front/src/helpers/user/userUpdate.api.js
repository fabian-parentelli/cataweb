const url = import.meta.env.VITE_API_URL;

const userUpdateApi = async (user) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/user`, {
        method: 'PUT',
        body: user,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { userUpdateApi };