import './dashBoard.css';
import { useState } from 'react';
import Sidebar from '../../components/utils/Sidebar/Sidebar';
import { useLoginContext } from '../../context/LoginContext';
import PanelUsers from '../../components/panel/PanelUsers/PanelUsers';
import DashImg from './DashImg/DashImg';

const DashBoard = () => {

    const { user } = useLoginContext();
    const [vewPanel, setVewPanel] = useState('/');    

    return (
        <div className='dashBoard'>
            <Sidebar user={user.data} setVewPanel={setVewPanel} navItems={navItems} vewPanel={vewPanel} />
            <section className='dashBoardSect'>
                {vewPanel === 'user' && <PanelUsers /> }
                {vewPanel === 'image' && <DashImg /> }
            </section>
        </div>
    );
};

export default DashBoard;

const navItems = [
    { icon: 'user', name: "Usuario", link: 'user' },
    { icon: 'dashboard', name: "Panel", link: '/' },
    { icon: 'credit', name: "Economía", link: 'cash' },
    { icon: 'ticket', name: "Eventos", link: 'event' },
    { icon: 'shirt', name: "Productos", link: 'product' },
    { icon: 'computer', name: "Sitio", link: 'site' },
    { icon: 'run', name: "Actividad", link: 'activity' },
    { icon: 'message', name: "Mensajes", link: 'message' },
    { icon: 'publicity', name: "Publicidad", link: 'publicity' },
    { icon: 'image', name: "Imágenes", link: 'image' },
];