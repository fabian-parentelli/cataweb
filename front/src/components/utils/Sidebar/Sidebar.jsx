import "./sidebar.css";
import Icons from "../../Icons/Icons";
import { useEffect, useState } from "react";
import { images } from '../../../utils/images.js'

const Sidebar = ({ user, setVewPanel, navItems, vewPanel }) => {

    const [active, setActive] = useState(1);

    const goto = (index, link) => {
        setActive(index);
        setVewPanel(link)
    };

    useEffect(() => {
        if(vewPanel && vewPanel !== '/') {
            const route =  vewPanel.replace('/', '');
        };
    }, [vewPanel]);

    return (
        <aside className="sidebar-4">
            <div className="inner">

                <div className="header">
                    <img src={user.avatar[0] || images.logoCata} className="logo" />
                    <h2>{user.name.toUpperCase()}</h2>
                </div>

                <nav
                    className="menu"
                    style={{ "--top": `${active === 0 ? 0 : active * 56}px` }}
                >
                    {navItems.map((item, index) => (
                        <button
                            className={active === index ? "active" : ""}
                            key={index}
                            type="button"
                            onClick={() => goto(index, item.link)}
                        >
                            <span><Icons type={item.icon} color="gray" size="25px" /> </span>
                            <p>{item.name}</p>
                        </button>
                    ))}
                </nav>

            </div>
        </aside>
    );
};

export default Sidebar;