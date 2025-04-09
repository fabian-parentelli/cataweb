import './vewAvatarsTable.css';
import { useState } from 'react';
import Icons from '../../../../../../components/Icons/Icons';
import Tooltip from '../../../../../../components/tools/Tooltip/Tooltip';
import ImgHover from '../../../../../../components/tools/ImgHover/ImgHover';

const VewAvatarsTable = ({ avatars }) => {

    const [modal, setModal] = useState({ open: false, data: null, type: null });

    return (
        <div className='vewAvatarsTable'>
            <table>
                <thead>
                    <tr>
                        <th>Imágen</th>
                        <th>Nombre</th>
                        <th>Activo</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {avatars && avatars.map(avat => (
                        <tr key={avat._id}>
                            <td><ImgHover img={avat.url} /> </td>
                            <td>{avat.name}</td>

                            <td
                                className='tdBack'
                                onClick={() => setModal({ open: true, data: avat._id, type: 'active' })}
                            >
                                <Tooltip text={avat.active ? 'Desactivar' : 'Activar'} position='left'>
                                    <Icons type='userCircle' color={avat.active ? '#009929' : 'red'} />
                                </Tooltip>
                            </td>
                            
                            <td
                                className='tdBack'
                                onClick={() => setModal({ open: true, data: avat._id, type: 'delete' })}
                            >
                                <Tooltip text='Eliminar' position='left'>
                                    <Icons type='delete'  />
                                </Tooltip>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default VewAvatarsTable;