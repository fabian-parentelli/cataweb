import './panelUsers.css';
import { useState } from 'react';
import TitlePanel from '../../tools/TitlePanel/TitlePanel';
import { useLoginContext } from '../../../context/LoginContext';
import UserData from '../../users/UserData/UserData';

const PanelUsers = () => {

    const { user } = useLoginContext();
    const [vew, setvew] = useState('');

    return (
        <div className='panelUsers'>
            <TitlePanel icon='user' title='Usuarios' help='user' />

            <section className='panelUsersButtons'>
                {user.data.role !== 'user' &&
                    <>
                        <button className='btn btnD' onClick={() => setvew('dat')} style={{ color: vew === 'dat' ? '#66b3ff' : '' }}>Mis Datos</button>
                        <button className='btn btnD' onClick={() => setvew('new')} style={{ color: vew === 'new' ? '#66b3ff' : '' }}>Crear</button>
                        <button className='btn btnD' onClick={() => setvew('vew')} style={{ color: vew === 'vew' ? '#66b3ff' : '' }}>Ver</button>
                    </>
                }
            </section>

            {vew === 'dat' && <UserData user={user.data} />}
        </div>
    );
};

export default PanelUsers;