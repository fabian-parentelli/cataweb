import './navBarContent.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../../components/Icons/Icons';
import NavBarMenu from '../NavBarMenu/NavBarMenu.jsx';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useLoginContext } from '../../../context/LoginContext';
import Tooltip from '../../../components/tools/Tooltip/Tooltip.jsx';

const NavBarContent = () => {

    const { datas } = useDataContext();

    const { user, current } = useLoginContext();

    useEffect(() => { current() }, []);

    return (
        <div className='navBarContent'>

            <Link to={'/'}>
                <img src={datas.logo} alt="img" />
                <h1>{datas.name}</h1>
            </Link>

            <section className='navBarContentSect'>

                <Link>Contacto</Link>

                {!user.logged ?
                    <div style={{ paddingRight: '1.2rem' }}>
                        <Tooltip text='Iniciar sesión' position='bottom'>
                            <Link to={'/login'}>
                                <Icons type='user' color='#EAEBEF' hover={true} />
                            </Link>
                        </Tooltip>
                    </div>
                    : <NavBarMenu user={user.data} />
                }

            </section>
        </div>
    );
};

export default NavBarContent;