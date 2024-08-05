import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';
import { processRegistration } from '../../utils/processAuth';

const Registration = () => {

    // Gérer la soumission du formulaire
    const handleSubmit = (event) => {
        
        // Récupérer les valeurs
        const username = document.querySelector('.inputUsername').value;
        const password = document.querySelector('.inputPassword').value;
        const email = document.querySelector('.inputEmail').value;
        const confirmPassword = document.querySelector('.inputConfirmPassword').value;

        processRegistration(username, email, password, confirmPassword);
    }

    return (
        <div id='Registration'>
            <div className='form'>
                <InputAuth icon="fa-regular fa-user" type="text" placeholder="Nom d'utilisateur" className="inputUsername" />
                <InputAuth icon="fa-regular fa-envelope" type="email" placeholder="Adresse électronique" className="inputEmail" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Mot de passe" className="inputPassword" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Confirmation du mot de passe" className="inputConfirmPassword" />
            </div>
            <p className='errorEmail'>L'adresse électronique est invalide !</p>
            <p className='errorPassword'>Les mots de passe ne sont pas identiques !</p>
            <button className='buttonSubmitAuthentification' onClick={handleSubmit}>Je m'inscris</button>
            <Link to='/'>Me connecter</Link>
        </div>
    );
};

export default Registration;