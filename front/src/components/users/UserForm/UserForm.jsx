import './userForm.css';

const UserForm = ({ vew = {}, values, setValues, dataRequired = {} }) => {

    const defaultVew = { name: true, email: true, password: true, phone: true, location: true, recoverPass: false, door: false };
    const finalVew = { ...defaultVew, ...vew };

    const defaultRequired = { name: true, email: true, password: true, phone: false, location: false, recoverPass: true, door: false };
    const isRequired = { ...defaultRequired, ...dataRequired };

    const handleChange = (e) => setValues((prevQuery) => ({ ...prevQuery, [e.target.name]: e.target.value }));

    const handleLocation = (e) => {
        setValues((prevQuery) => ({
            ...prevQuery, location: {
                ...prevQuery.location, [e.target.name]: e.target.value
            }
        }));
    };

    return (
        <div className='userForm'>

            {finalVew.name &&
                <div>
                    <label>Nombre</label>
                    <input
                        type="text" name='name'
                        placeholder='Nombre' required={isRequired.name}
                        onChange={handleChange}
                        value={values?.name || ''}
                    />
                </div>
            }

            {finalVew.email &&
                <div>
                    <label>Email</label>
                    <input
                        type="email" name='email'
                        placeholder='tuemail@cata.com' required={isRequired.email}
                        onChange={handleChange}
                        value={values?.email || ''}
                    />
                </div>
            }

            {finalVew.password &&
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password" name='password'
                        placeholder='Contraseña' required={isRequired.password}
                        onChange={handleChange}
                        value={values?.password || ''}
                    />
                </div>
            }

            {finalVew.recoverPass &&
                <div>
                    <label>Repite la contraseña</label>
                    <input
                        type="password" name='recoverPass'
                        placeholder='Repite la contraseña' required={isRequired.recoverPass}
                        onChange={handleChange}
                        value={values?.recoverPass || ''}
                    />
                </div>
            }

            {finalVew.phone &&
                <div>
                    <label>Teléfono</label>
                    <input
                        type="phone" name='phone'
                        placeholder='Teléfono' required={isRequired.phone}
                        onChange={handleChange}
                        value={values?.phone || ''}
                    />
                </div>
            }

            {finalVew.location &&
                <>
                    <div>
                        <label>Provincia</label>
                        <input
                            type="text" name='province'
                            placeholder='Provincia' required={isRequired.province}
                            onChange={handleLocation}
                            value={values?.location?.province || ''}
                        />
                    </div>

                    <div>
                        <label>Ciudad</label>
                        <input
                            type="text" name='city'
                            placeholder='Las toninas' required={isRequired.location}
                            onChange={handleLocation}
                            value={values?.location?.city || ''}
                        />
                    </div>
                </>
            }

            {finalVew.door &&
                <div>
                    <label>Puerta</label>
                    <input
                        type="text" name='door'
                        placeholder='Las toninas' required={isRequired.door}
                        onChange={handleLocation}
                        value={values?.location?.door || ''}
                    />
                </div>
            }

        </div>
    );
};

export default UserForm;