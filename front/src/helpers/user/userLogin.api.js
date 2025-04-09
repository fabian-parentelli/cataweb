const url = import.meta.env.VITE_API_URL;

async function userLoginApi(values) {

    const response = await fetch(`${url}/api/user/login`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    
    const content = await response.json();
    return content?.data || content;
};

export { userLoginApi };