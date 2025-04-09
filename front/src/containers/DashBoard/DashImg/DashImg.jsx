import './dashImg.css';
import { useState } from 'react';
import TitlePanel from '../../../components/tools/TitlePanel/TitlePanel';
import DashImgAvat from './DashImgAvat/DashImgAvat';

const DashImg = () => {

    const [vew, setVew] = useState('');

    return (
        <div className='dashImg'>
            <TitlePanel icon='image' title='Imágenes' />

            <section className='dashImgButtons'>
                <button className='btn btnD' onClick={()=> setVew('avata')} style={{color: vew === 'avata' ? '#66b3ff' : ''}}>Avatares</button>
                <button className='btn btnD' onClick={()=> setVew('icons')} style={{color: vew === 'icons' ? '#66b3ff' : ''}}>Iconos</button>
            </section>

            {vew === 'avata' && <DashImgAvat />}
        </div>
    );
};

export default DashImg;