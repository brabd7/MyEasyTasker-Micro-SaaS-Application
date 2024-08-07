import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { processLogin } from '../../utils/processAuth';

const Login = () => {

    const navigate = useNavigate();

    // Gérer la soumission du formulaire
    const handleSubmit = (event) => {
        
        // Récupérer les valeurs
        const username = document.querySelector('.inputUsername').value;
        const password = document.querySelector('.inputPassword').value;

        processLogin(username, password, navigate);
    }

    return (
        <div id='Login'>
            <div className='form'>
                <InputAuth icon="fa-regular fa-user" type="text" placeholder="Nom d'utilisateur" className="inputUsername" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Mot de passe" className="inputPassword" />
            </div>
            <button className='buttonSubmitAuthentification' onClick={handleSubmit}>Je me connecte</button>
            <Link to='/registration'>M'inscrire</Link>
        </div>
    );
};

export default Login;