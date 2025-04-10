import './vewAvatars.css';
import { useEffect, useState } from 'react';
import VewAvatarsTable from './VewAvatarsTable/VewAvatarsTable.jsx';
import Pager from '../../../../../components/tools/Pager/Pager.jsx';
import { useAlertContext } from '../../../../../context/AlertContext';
import { getAvatarsApi } from '../../../../../helpers/images/avatars/getAvatars.api.js';
import { updActiveActApi } from '../../../../../helpers/images/avatars/updAvatarAct.api.js';
import { deleteAvatarApi } from '../../../../../helpers/images/avatars/deleteAvatar.api.js';

const VewAvatars = ({ avatars, setAvatars }) => {

    const { showAlert, setLoading } = useAlertContext();
    const [query, setQuery] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvatarsApi(query);
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, [query]);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveActApi(id);
        if (response.status === 'success') {
            const data = { ...avatars };
            const index = data.docs.findIndex(avat => avat._id === id);
            data.docs[index].active = !data.docs[index].active;
            setAvatars(data);
            showAlert(`${data.docs[index].active ? 'Activaste' : 'Desactivaste'} el avatar`);
        } else showAlert(response.error, 'error');
        setLoading(false);
    };

    const handleDelete = async (obj) => {
        const response = await deleteAvatarApi(obj);
        if (response.status === 'success') {
            const data = { ...avatars };
            const index = data.docs.findIndex(avat => avat._id === obj.data);
            data.docs.splice(index, 1);
            setAvatars(data);
        } else showAlert(response.error, 'error');
        return 'success'
    };

    return (
        <div className='vewAvatars'>
            {avatars && avatars.docs.length > 0 &&
                <VewAvatarsTable
                    avatars={avatars.docs}
                    handleActive={handleActive}
                    handleDelete={handleDelete}
                />
            }
            <Pager docs={avatars} setQuery={setQuery} />
        </div>
    );
};

export default VewAvatars;