import React from 'react';
import InputAuth from '../../components/InputAuth';
import { Link } from 'react-router-dom';
import { inputCleaningProcess, validateInputEmail } from '../../utils/form';
import { insertUser } from '../../services/firebase';

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
            document.querySelector('.errorEmail').style.display = "none";

            // Vérifier la correspondance des mots de passe
            if (password === confirmPassword)
            {
                document.querySelector('.errorPassword').style.display = "none";

                // Processus de nettoyage des entrées
                const inputCleaningProcessCompleted = inputCleaningProcess({username: username, email: email, password: password});

                // // Envoyer dans la base de données
                // insertUser(inputCleaningProcessCompleted);
            }
            else 
            {
                // Afficher l'erreur
                document.querySelector('.errorPassword').style.display = "block";
            }
        }
        else 
        {
            // Afficher l'erreur
            document.querySelector('.errorEmail').style.display = "block";
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
            <p className='errorEmail'>L'adresse électronique est invalide !</p>
            <p className='errorPassword'>Les mots de passe ne sont pas identiques !</p>
            <button className='buttonSubmitAuthentification' onClick={handleSubmit}>Je m'inscris</button>
            <Link to='/'>Me connecter</Link>
        </div>
    );
};

export default Registration;