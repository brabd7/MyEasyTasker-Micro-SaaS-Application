import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';

const login = () => {
    return (
        <div id='Login'>
            <div className='form'>
                <InputAuth icon="fa-regular fa-user" type="text" placeholder="Nom d'utilisateur" className="inputUserName" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Mot de passe" className="inputPassword" />
            </div>
            <button className='buttonSubmitAuthentification'>Je me connecte</button>
            <Link to='/registration'>M'inscrire</Link>
        </div>
    );
};

export default login;