import './vewAvatars.css';
import { useEffect, useState } from 'react';
import VewAvatarsTable from './VewAvatarsTable/VewAvatarsTable.jsx';
import Pager from '../../../../../components/tools/Pager/Pager.jsx';
import { useAlertContext } from '../../../../../context/AlertContext';
import { getAvatarsApi } from '../../../../../helpers/images/avatars/getAvatars.api.js';

const VewAvatars = ({ avatars, setAvatars }) => {

    const { showAlert } = useAlertContext();
    const [query, setQuery] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAvatarsApi(query);
            if (response.status === 'success') setAvatars(response.result);
            else showAlert(response.error, 'error');
        }; fetchData();
    }, [query]);

    return (
        <div className='vewAvatars'>
            <p>Filtro</p>
            {avatars && avatars.docs.length > 0 && <VewAvatarsTable avatars={avatars.docs} />}
            <Pager docs={avatars} setQuery={setQuery} />
        </div>  
    );
};

export default VewAvatars;


// Trabjar:
// Trabjar:
// Trabjar:
// Trabjar:

// Hacer andar los filtros,
// activar desactivar el avatar
// Eliminar un avtar