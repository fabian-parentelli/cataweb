import './newAvatar.css';
import { useState } from 'react';
import { useAlertContext } from '../../../../../context/AlertContext';
import CloudFile from '../../../../../components/tools/CloudFile/CloudFile';
import { postAvatarApi } from '../../../../../helpers/images/avatars/postAvatar.api';

const NewAvatar = ({ avatars, setAvatars }) => {

    const { showAlert, setLoading } = useAlertContext();

    const [name, setName] = useState(null);
    const [key, setKey] = useState(Date.now());
    const [formdata, setFormdata] = useState(new FormData());

    const handleFileChange = (data) => setFormdata(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (name) formdata.set('name', name);
        const response = await postAvatarApi(formdata);
        if (response.status === 'success') {
            setFormdata(new FormData());
            setName('');
            setKey(Date.now());
            const data = { ...avatars };
            data.docs.unshift(response.result);
            setAvatars(data);
            showAlert('Avatar creado con éxito');
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    return (
        <div className='newAvatar'>
            <h2>Nuevo Avatar</h2>

            <form className='newAvatarSect' onSubmit={handleSubmit}>

                <div className='newAvatarCloud'>
                    <CloudFile key={key} contClass='cfRect' onChange={handleFileChange} folderName='avatars' />
                </div>

                <div className='newAvatarDiv'>
                    <label>
                        Nombre
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name || ''} />
                    </label>
                    <button className='btn btnD'>Crear</button>
                </div>

            </form>
        </div>
    );
};

export default NewAvatar;