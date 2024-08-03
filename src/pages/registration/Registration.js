import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';

const Registration = (props) => {
    return (
        <div id='Registration'>
            <div className='form'>
                <InputAuth icon="fa-regular fa-user" type="text" placeholder="Nom d'utilisateur" className="inputUserName" />
                <InputAuth icon="fa-regular fa-envelope" type="email" placeholder="Adresse électronique" className="inputEmail" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Mot de passe" className="inputPassword" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Confirmation du mot de passe" className="inputConfirmPassword" />
            </div>
            <button className='buttonSubmitAuthentification'>Je m'inscris</button>
            <Link to='/'>Me connecter</Link>
        </div>
    );
};

export default Registration;