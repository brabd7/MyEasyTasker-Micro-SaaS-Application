import { escapeHtml, validateInputEmail, validatePasswords } from "./form";
import {insertUser, getAllUsers} from '../services/firebase';

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
        if (validatePasswords(escapePassword, escapeConfirmPassword))
        {
            console.log('olk')
        }
    }
}


