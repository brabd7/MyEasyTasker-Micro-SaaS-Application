// Fonction pour échapper les caractères HTML afin de prévenir les attaques XSS
export function escapeHtml(html) 
{
    const element = document.createElement('div');
    if (html) {
        element.innerText = html;
        html = element.innerHTML;
    }
    return html;
}

// Fonction pour valider les adresses email
export function validateInputEmail(value) {
    // Définition d'une expression régulière pour une validation simple des emails
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Vérification si la valeur correspond au motif de l'email
    if (emailPattern.test(value)) {
        removeError();
        return true; 
    } else {
        createError("L'adresse électronique est invalide !");
        return false;
    }
}

// Fonction pour la validité des mots de passe
export function validatePasswords(password, confirmPassword)
{
    // Nombre de caractères du mot de passe
    if (password.length >= 8)
    {
        // Supprimer l'erreur si elle existe
        removeError();

        // Vérifier la correspondance des mots de passe
        if (password === confirmPassword)
        {
            removeError();
            return true;
        }
        else 
        {
            createError('Les mots de passe ne correspondent pas !')
            return false;
        }
    }
    else 
    {
        createError('Le mot de passe doit faire 8 caractères !')
        return false;
    }
}

// Fonction pour créer un paragraphe d'erreur
export function createError(string)
{
    if (!document.querySelector('.error'))
    {
        // Créer un nouvel élément <p>
        const error = document.createElement('p');

        // Définir le texte du paragraphe
        error.textContent = string;

        // Définir une classe
        error.classList.add('error');

        // Trouver l'élément avec la classe 'form'
        const formElement = document.querySelector('.form');

        // Ajouter le nouvel élément <p> juste après l'élément avec la classe 'form'
        formElement.parentNode.insertBefore(error, formElement.nextSibling);
    }
}

// Fonction pour supprimer une erreur
export function removeError()
{
    if (document.querySelector('.error'))
    {
        document.querySelector('.error').remove();
    }
}