import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';
import { inputCleaningProcess, validateInputEmail } from '../../utils/form';

const Registration = (props) => {

    // Gérer la soumission du formulaire
    const handleSubmit = (event) => {
        
        // Récupérer les valeurs
        const username = document.querySelector('.inputUsername').value;
        const password = document.querySelector('.inputPassword').value;
        let email = null
        const confirmPassword = document.querySelector('.inputConfirmPassword').value;

        // Vérifier la validité de l'email
        if (validateInputEmail(document.querySelector('.inputEmail').value))
        {
            // Enregistrer l'email
            email = document.querySelector('.inputEmail').value;
            document.querySelector('.error').style.display = "none";

            // Processus de nettoyage des entrées
            const inputCleaningProcessCompleted = inputCleaningProcess({username: username, email: email, password: password, confirmPassword: confirmPassword});
            console.log(inputCleaningProcessCompleted)
        }
        else 
        {
            // Afficher l'erreur
            document.querySelector('.error').style.display = "block";
        }
    }

    return (
        <div id='Registration'>
            <div className='form'>
                <InputAuth icon="fa-regular fa-user" type="text" placeholder="Nom d'utilisateur" className="inputUsername" />
                <InputAuth icon="fa-regular fa-envelope" type="email" placeholder="Adresse électronique" className="inputEmail" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Mot de passe" className="inputPassword" />
                <InputAuth icon="fa-solid fa-lock" type="password" placeholder="Confirmation du mot de passe" className="inputConfirmPassword" />
            </div>
            <p className='error'>L'adresse électronique est invalide !</p>
            <button className='buttonSubmitAuthentification' onClick={handleSubmit}>Je m'inscris</button>
            <Link to='/'>Me connecter</Link>
        </div>
    );
};

export default Registration;