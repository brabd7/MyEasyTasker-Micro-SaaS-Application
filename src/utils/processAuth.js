import { createError, escapeHtml, removeError, validateInputEmail, validatePasswords } from "./form";
import { getUserWithEmail, getUserWithUsername, insertUser } from '../services/firebase';
import bcrypt from 'bcryptjs';

export function processRegistration(username, email, password, confirmPassword, navigate) {

    // Échapper aux caractères HTML
    const escapeUsername = escapeHtml(username);
    const escapeEmail = escapeHtml(email);
    const escapePassword = escapeHtml(password);
    const escapeConfirmPassword = escapeHtml(confirmPassword);

    // Vérifier que l'email est valide 
    if (validateInputEmail(escapeEmail)) {
        
        // Vérifier la validité des mots de passe
        if (validatePasswords(escapePassword, escapeConfirmPassword)) {
        
            // Hash le mot de passe directement avec bcrypt.hash
            bcrypt.hash(escapePassword, 10)
            .then(hashPassword => {
            
                // Vérifier que le nom d'utilisateur n'existe pas
                return getUserWithUsername(escapeUsername)
                .then(userWithUsername => {
                if (!userWithUsername) 
                {
                    // Supprimer l'erreur s'il y en a une
                    removeError();

                    // Vérifier que l'adresse email n'existe pas
                    return getUserWithEmail(escapeEmail)
                    .then(userWithEmail => {
                        if (!userWithEmail) 
                        {              
                            // Supprimer l'erreur s'il y en a une
                            removeError();

                            // Insérer dans la base de données l'utilisateur
                            insertUser({ username: escapeUsername, email: escapeEmail, password: hashPassword });
                            
                            // Aller vers la page de login
                            navigate('/login');
                        } 
                        else 
                        {
                            createError("L'adresse électronique existe déjà !");
                        }
                    });
                } 
                else 
                {
                    createError("Le nom d'utilisateur existe déjà !");
                }
                });
            })
            .catch(error => console.log(error));
        }
    }
}
