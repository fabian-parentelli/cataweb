function typeActivity(activity) {

    const category = {

        // users
        'register': () => { return { icon: 'user', activty: 'Te registraste en la plataforma', alert: 'Un nuevo usuario se registró' } },
        'login': () => { return { icon: 'user', activty: 'Iniciaste sesión', alert: 'Han inciado sesión' } },
        
        // Images
        'newAvatar': () => { return { icon: 'userCircle', activty: 'Creaste un nuevo avatar', alert: 'Se ha creado con éxito un avatar' } },

        'default': () => { return { icon: 'carrot', activity: 'Actividad no definida', alert: 'Actividad no definida' } },
    };

    return (category[activity] || category['default'])();
};

export { typeActivity };