import './userData.css';
import { useState } from 'react';
import UserForm from '../UserForm/UserForm';
import CloudFile from '../../tools/CloudFile/CloudFile';
import UserDataAvatars from './UserDataAvatars/UserDataAvatars';
import { useLoginContext } from '../../../context/LoginContext';

const UserData = ({ user }) => {

    const { update } = useLoginContext();

    const [formdata, setFormdata] = useState(new FormData());
    const [values, setValues] = useState(user);

    const handleFileChange = (data) => setFormdata(data);

    const handleClick = async () => {
        formdata.set('data', JSON.stringify(values));


        formdata.forEach((value, key) => {
            console.log(key, value);
            
        })

        // await update(formdata);

        setFormdata(new FormData());
    };

    return (
        <div className='userData'>
            <h4>Datos del usuario</h4>

            <section className='userDataSect'>

                <div className='userDataInputs'>
                    <UserForm
                        vew={{ door: true, password: false }}
                        values={values} setValues={setValues}
                    />
                </div>

                <div className='userDataInputs userDataFlex'>
                    <h5>Subir imagen</h5>
                    <CloudFile
                        onChange={handleFileChange}
                        contClass='cfRect' folderName='users'
                        img={user.avatar?.length > 0 ? [{ url: user.avatar[0], type: 'image' }] : []}
                    />
                    <button className='btn btnD' onClick={handleClick}>
                        Actualizar
                    </button>
                </div>

                <div className='userDataInputs userDataFlex'>

                    <UserDataAvatars />
                </div>

                <div className='userDataInputs userDataFlex'>
                    <h5>Imagenes Historicas</h5>

                </div>

            </section>
        </div>
    );
};

export default UserData;

// propos- user, datos del usuario pero no password.