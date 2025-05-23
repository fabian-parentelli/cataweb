const url = import.meta.env.VITE_API_URL;

const deleteAvatarApi = async (avatar) => {

    const token = localStorage.getItem('token');
    
    const response = await fetch(`${url}/api/image/avatar`, {
        method: 'DELETE',
        body: JSON.stringify(avatar),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    
    const content = await response.json();
    return content?.data || content;
};

export { deleteAvatarApi };