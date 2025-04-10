import './passInput.css';
import { useState } from 'react';
import SpinnerH from '../SpinnerH/SpinnerH';

const PassInput = ({ text, passFuntions, setModal, data }) => {

    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await passFuntions({ data, password });
        if (result) setModal({ open: false, data: null, type: null });
        setLoading(false);
    };

    return (
        <form className='passInput' onSubmit={handleSubmit}>
            <h3>Contraseña</h3>
            <input
                type="text" value={password} onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button className='btn btnD' disabled={loading}>
                {loading ? <SpinnerH /> : text}
            </button>
        </form>
    );
};

export default PassInput;

// text: texto en el botón
// passFuntions: función llamada desde el padre para enviar los datos mas contraseña
// setModal: Función que cierra el modal
// Data: datos que vienen desde el padre