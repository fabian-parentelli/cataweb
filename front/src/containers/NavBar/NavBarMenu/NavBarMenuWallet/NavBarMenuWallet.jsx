import './navBarMenuWallet.css';
import { Link } from 'react-router-dom';

const NavBarMenuWallet = () => {

    return (
        <div className='navBarMenuWallet'>
            <div>
                <p className='pgray'>Saldo</p>
                <p className='colpa'>0 AR$</p>
            </div>
            <Link to={'/panel/wallet'}>
                <h4>Billetera</h4>
            </Link>
        </div>
    );
};

export default NavBarMenuWallet;