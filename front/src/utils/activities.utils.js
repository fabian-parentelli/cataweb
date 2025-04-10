function typeActivity(activity) {

    const category = {

        // users
        'register': () => { return { icon: 'user', activty: 'Te registraste en la plataforma', alert: 'Un nuevo usuario se registró' } },
        'login': () => { return { icon: 'user', activty: 'Iniciaste sesión', alert: 'Han inciado sesión' } },
        'putDataUser': () => { return { icon: 'user', activty: 'Modificaste tu perfil', alert: 'Modificaron tu perfil' } },
        'putDataUser_admin': () => { return { icon: 'userCircle', activty: 'Modificaste el perfil de un usuario', alert: 'El administrador modificó tu perfil' } },

        // Images
        'newAvatar': () => { return { icon: 'userCircle', activty: 'Creaste un nuevo avatar', alert: 'Se ha creado con éxito un avatar' } },
        'updActiveAvatar': () => { return { icon: 'userCircle', activty: 'Actualización del estado activo de un avatar', alert: 'Se ha Actualizado el estado activo de un avatar' } },

        'default': () => { return { icon: 'carrot', activity: 'Actividad no definida', alert: 'Actividad no definida' } },
    };

    return (category[activity] || category['default'])();
};

export { typeActivity };