import { escapeHtml, validateInputEmail } from "./form";
import {insertUser, getAllUsers} from '../services/firebase';

export function processRegistration(username, email, password, confirmPassword)
{
    // Échapper aux caractères HTML
    const escapeUsername = escapeHtml(username);
    const escapeEmail = escapeHtml(email);
    const escapePassword = escapeHtml(password);
    const escapeConfirmPassword = escapeHtml(confirmPassword);

    getAllUsers()
}
