const url = import.meta.env.VITE_API_URL;

const postAvatarApi = async (avatar) => {

    const token = localStorage.getItem('token');
    
    const response = await fetch(`${url}/api/image/avatar`, {
        method: 'POST',
        body: avatar,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    const content = await response.json();
    return content?.data || content;
};

export { postAvatarApi };