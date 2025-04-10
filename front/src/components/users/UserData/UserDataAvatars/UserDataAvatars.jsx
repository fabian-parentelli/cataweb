import './userDataAvatars.css';
import { useEffect, useState } from 'react';
import CarouselOne from '../../../utils/CarouselOne/CarouselOne';
import { useAlertContext } from '../../../../context/AlertContext';
import { getAvatarsApi } from '../../../../helpers/images/avatars/getAvatars.api.js';

const UserDataAvatars = () => {

    const { showAlert } = useAlertContext();
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvatarsApi({ selected: true, active: true });
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, []);

    return (
        <div className='userDataAvatars'>
            <h5>Avatares</h5>
            {avatars && <CarouselOne images={avatars} />}
            <button className='btn btnA'>Elegír</button>
        </div>
    );
};

export default UserDataAvatars;