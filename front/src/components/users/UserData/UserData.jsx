import './userData.css';
import UserForm from '../UserForm/UserForm';
import CloudFile from '../../tools/CloudFile/CloudFile';
import CarouselOne from '../../utils/CarouselOne/CarouselOne';

const UserData = ({ user }) => {

    return (
        <div className='userData'>
            <h4>Datos del usuario</h4>

            <section className='userDataSect'>

                <div className='userDataInputs'>
                    <UserForm vew={{ door: true, password: false }} />
                </div>

                <div className='userDataInputs userDataFlex'>
                    <h5>Subir imagen</h5>
                    <CloudFile contClass='cfRect' />
                    <button className='btn btnD'>Actualizar</button>
                </div>
                
                <div className='userDataInputs userDataFlex'>
                    <h5>Avatares</h5>
                    <CarouselOne />

                </div>

            </section>
        </div>
    );
};

export default UserData;

// propos- user, datos del usuario pero no password.