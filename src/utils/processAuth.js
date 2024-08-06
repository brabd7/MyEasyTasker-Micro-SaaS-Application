import { createError, escapeHtml, removeError, validateInputEmail, validatePasswords } from "./form";
import {getUserWithUsername, notExistUser} from '../services/firebase';

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
            if (notExistUser(escapeUsername))
            {
                console.log('ok')
            }
        }
    }
}


