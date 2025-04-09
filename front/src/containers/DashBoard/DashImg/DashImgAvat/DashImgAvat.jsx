import './dashImgAvat.css';
import { useState } from 'react';
import NewAvatar from './NewAvatar/NewAvatar';
import VewAvatars from './VewAvatars/VewAvatars';

const DashImgAvat = () => {

    const [avatars, setAvatars] = useState({ docs: [] });

    return (
        <div className='dashImgAvat'>
            <NewAvatar avatars={avatars} setAvatars={setAvatars} />
            <VewAvatars avatars={avatars} setAvatars={setAvatars} />
        </div>
    );
};

export default DashImgAvat;