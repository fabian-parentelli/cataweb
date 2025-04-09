import './register.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserForm from '../../../components/users/UserForm/UserForm';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { useDataContext } from '../../../context/DataContext.jsx';

const Register = () => {

    const navigate = useNavigate();
    const { datas } = useDataContext();
    const { user, register } = useLoginContext();
    const [values, setValues] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(values);
    };

    useEffect(() => {
        if (user.logged) {
            const path = localStorage.getItem('path');
            if (path) {
                localStorage.removeItem('path');
                setTimeout(() => { navigate(`/${path}`) }, 2000);
            } else navigate('/');
        };
    }, [user]);

    return (
        <div className='register'>

            <form onSubmit={handleSubmit}>
                <h2>Regístrate</h2>
                <div className='registerForm'>
                    <UserForm
                        vew={{ location: false, phone: false }}
                        values={values} setValues={setValues}
                    />
                    <UserForm
                        vew={{ name: false, email: false, password: false }}
                        dataRequired={{ phone: false, location: false }}
                        values={values} setValues={setValues}
                    />
                </div>
                <p className='pgray' style={{ textAlign: 'center' }}>Los inputs con borde naranja son obligatorios</p>
                <button className='btn btnA'>Regístrate</button>
                <Link to={'/login'} className='loginRegister'>Iniciar sesión</Link>
                <Link to={'/what_email'} className='loginRegister pgray'>Recuperar contraseña</Link>
            </form>

            <section>
                <img src={datas.logo} alt="img" />
            </section>
        </div>
    );
};

export default Register;