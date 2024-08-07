import { createError, escapeHtml, removeError, validateInputEmail, validatePasswords } from "./form";
import { getUserWithEmail, getUserWithUsername, insertUser, generateCookie } from '../services/firebase';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';

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
                            insertUser({ username: escapeUsername, email: escapeEmail, password: hashPassword, userId: generateCookie()});
                            
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

export function processLogin(username, password, navigate) {
    // Échapper aux caractères HTML
    const escapeUsername = escapeHtml(username);
    const escapePassword = escapeHtml(password);

    // Rechercher l'utilisateur dans la base de données
    getUserWithUsername(username)
    .then((user) => {
        if (user)
        {
            // Supprimer l'erreur s'il y en a une
            removeError();

            // Vérifier la validité du mot de passe s'il correspond à celui récupéré dans la bdd
            bcrypt.compare(escapePassword, user.password)
            .then((success) => {
                if (success)
                {
                    // Supprimer l'erreur s'il y en a une
                    removeError();

                    // Créer un cookie de session après une connexion réussie
                    Cookies.set('userId', user.userId, { expires: 1 });

                    // Rediriger vers /main
                    navigate('/main');
                }
                else 
                {
                    createError("Le nom d'utilisateur ou le mot de passe est incorrect !");
                }
            })
            .catch((error) => console.log(error))
        }
        else 
        {
            createError("Le nom d'utilisateur ou le mot de passe est incorrect !");
        }
    })
    .catch((error) => console.log(error))
}

