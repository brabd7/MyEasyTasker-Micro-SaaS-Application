import { Outlet } from 'react-router-dom';
import '../assets/styles/auth.scss';

const Authentification = () => {
    return (
        <div id='Authentification'>
            <h1>MyEasyTasker.</h1>
            <Outlet />
        </div>
    );
};

export default Authentification;