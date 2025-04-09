const typePanel = (type) => {

    const types = {
        'master': () => { return '/dashboard' },
        'admin': () => { return '/adminpanel' },
        'seller': () => { return '/sellerpanel' },
        'default': () => { return '/user' }
    };

    return (types[type] || types['default'])();
};

export { typePanel };