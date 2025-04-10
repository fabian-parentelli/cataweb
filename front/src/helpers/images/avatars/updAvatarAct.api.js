const url = import.meta.env.VITE_API_URL;

const updActiveActApi = async (id) => {

    const token = localStorage.getItem('token');

    const response = await fetch(`${url}/api/image/avatar/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { updActiveActApi };