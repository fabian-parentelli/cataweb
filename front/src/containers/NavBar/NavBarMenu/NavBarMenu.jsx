import './navBarMenu.css';
import { images } from '../../../utils/images.js';
import { useState, useRef, useEffect } from 'react';
import NavBarMenuEnd from './NavBarMenuEnd/NavBarMenuEnd.jsx';
import NavBatMenuData from './NavBarMenuData/NavBarMenuData.jsx';
import NavBarMenuLinks from './NavBarMenuLinks/NavBarmenuLinks.jsx';
import NavBarMenuWallet from './NavBarMenuWallet/NavBarMenuWallet.jsx';

const NavBarMenu = ({ user }) => {

    const containerRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) setOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className='navBarMenu' ref={containerRef}>

            <div className='navBarMenuPortal' onClick={() => setOpen(!open)}>
                <img src={user.avatar[0] ?? images.logoCata} alt="img" />
            </div>

            <section className={open ? 'menuItemVewOpen' : 'menuItemVewClosed'} onClick={() => setOpen(!open)}>
                <NavBatMenuData user={user} />
                <NavBarMenuLinks />
                <NavBarMenuWallet />
                <NavBarMenuEnd />
            </section>

        </div>
    );
};

export default NavBarMenu;