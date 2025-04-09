import './titlePanel.css';
import Icons from '../../Icons/Icons';
import { Link } from 'react-router-dom';

const TitlePanel = ({ icon, title, help }) => {

    return (
        <div className='titlePanel'>
            
            <section className='titlePanelSect'>
                <Icons type={icon || 'dashboard'} color='#003366' />
                <h2>{title || 'Título'}</h2>
            </section>
            
            {help &&
                <Link to={`/helps#${help}`}>
                    Ayuda
                </Link>
            }

        </div>
    );
};

export default TitlePanel;