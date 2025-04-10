import './vewAvatarsTable.css';
import { useState } from 'react';
import Icons from '../../../../../../components/Icons/Icons';
import Modal from '../../../../../../components/tools/Modal/Modal';
import Tooltip from '../../../../../../components/tools/Tooltip/Tooltip';
import ImgHover from '../../../../../../components/tools/ImgHover/ImgHover';
import PassInput from '../../../../../../components/tools/PassInput/PassInput';

const VewAvatarsTable = ({ avatars, handleActive, handleDelete }) => {

    const [modal, setModal] = useState({ open: false, data: null });

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
                                onClick={() => handleActive(avat._id)}
                            >
                                <Tooltip text={avat.active ? 'Desactivar' : 'Activar'} position='left'>
                                    <Icons type='userCircle' color={avat.active ? '#009929' : 'red'} />
                                </Tooltip>
                            </td>

                            <td
                                className='tdBack'
                                onClick={() => setModal({ open: true, data: avat._id })}
                            >
                                <Tooltip text='Eliminar' position='left'>
                                    <Icons type='delete' />
                                </Tooltip>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={modal.open} onClose={() => setModal({ open: false, data: null })}>
                <PassInput
                    text='Eliminar'
                    passFuntions={handleDelete}
                    setModal={setModal}
                    data={modal.data}
                />
            </Modal>
        </div>
    );
};

export default VewAvatarsTable;