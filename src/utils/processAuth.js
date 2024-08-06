import { createError, escapeHtml, removeError, validateInputEmail, validatePasswords } from "./form";
import {getUserWithEmail, getUserWithUsername, insertUser} from '../services/firebase';

export function processRegistration(username, email, password, confirmPassword)
{
    // Échapper aux caractères HTML
    const escapeUsername = escapeHtml(username);
    const escapeEmail = escapeHtml(email);
    const escapePassword = escapeHtml(password);
    const escapeConfirmPassword = escapeHtml(confirmPassword);

    // Vérifier que l'email est valide 
    if (validateInputEmail(escapeEmail))
    {
        // Vérifier la validité des mots de passe
        if (validatePasswords(escapePassword, escapeConfirmPassword))
        {
            // Vérifier que le nom d'utilisateur n'existe pas
            getUserWithUsername(escapeUsername)
            .then((user) => {
                if (!user)
                {
                    // Supprimer l'erreur s'il y en a une
                    removeError();

                    // Vérifier que l'adresse email n'existe pas
                    getUserWithEmail(escapeEmail)
                    .then((user) => {
                        if (!user)
                        {
                            // Supprimer l'erreur s'il y en a une
                            removeError();

                            // Insérer dans la base de données l'utilisateur
                            insertUser({username: escapeUsername, email: escapeEmail, password: escapePassword});
                        }
                        else 
                        {
                            createError("L'adresse électronique existe déjà !");
                        }
                    })
                    .catch((error) => console.log(error))
                }
                else 
                {
                    createError("Le nom d'utilisateur existe déjà !");
                }
            })
            .catch((error) => console.log(error))
        }
    }
}


