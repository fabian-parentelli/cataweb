import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { images } from '../../../utils/images.js';
import UserForm from '../../../components/users/UserForm/UserForm.jsx';
import { useLoginContext } from '../../../context/LoginContext.jsx';
import { useDataContext } from '../../../context/DataContext.jsx';

const Login = () => {

    const navigate = useNavigate();
    const { datas } = useDataContext();
    const { user, login } = useLoginContext();
    const [values, setValues] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(values);
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
        <div className='login'>

            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <UserForm
                    vew={{ name: false, phone: false, location: false }}
                    values={values} setValues={setValues}
                />
                <p className='pgray' style={{ textAlign: 'center' }}>Los inputs con borde naranja son obligatorios</p>
                <button className='btn btnA'>Iniciar Sesión</button>
                <Link to={'/register'} className='loginRegister'>Regístrate</Link>
                <Link to={'/what_email'} className='loginRegister pgray'>Recuperar contraseña</Link>
            </form>

            <section>
                <img src={datas.logo} alt="img" />
            </section>
        </div>
    );
};

export default Login;