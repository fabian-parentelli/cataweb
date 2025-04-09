import './tooltip.css';
import { useState } from 'react';

const Tooltip = ({ text = 'tooltip', children, position = 'top' }) => {

    const [vew, setVew] = useState(false);

    return (
        <div
            className='tooltip'
            onMouseEnter={() => setVew(true)}
            onMouseLeave={() => setVew(false)}
        >
            {children}
            {vew && position !== 'none' && <p className={`tooltipText ${position} ${vew ? 'visible' : ''}`}>{text}</p>}
        </div>
    );
};

export default Tooltip;