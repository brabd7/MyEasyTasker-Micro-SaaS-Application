// Fonction pour échapper les caractères HTML afin de prévenir les attaques XSS
function escapeHtml(html) 
{
    const element = document.createElement('div');
    if (html) {
        element.innerText = html;
        html = element.innerHTML;
    }
    return html;
}

// Fonction pour valider les entrées de base
function validateInput(value, type) 
{
    // Validation de base pour les chaînes de caractères
    if (typeof value !== 'string' || value.trim().length === 0) {
        return false;
    }
    if (type === 'email') {
        // Validation simple d'une adresse email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value);
    }
    return true;
}

// Fonction principale pour obtenir, valider et nettoyer les valeurs du formulaire
export function validateAndSanitizeFormData(username, email, password, confirmPassword) 
{
    // Nettoyage des valeurs pour éviter les attaques XSS
    const sanitizedUsername = escapeHtml(username);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedPassword = escapeHtml(password);
    const sanitizedConfirmPassword = escapeHtml(confirmPassword);

    // Validation des valeurs
    if (!validateInput(sanitizedUsername)) {
        console.error('Le nom d\'utilisateur est requis et ne peut pas être vide.');
        return;
    }
    if (!validateInput(sanitizedEmail, 'email')) {
        console.error('Adresse email invalide.');
        return;
    }
    if (!validateInput(sanitizedPassword)) {
        console.error('Le mot de passe est requis.');
        return;
    }
    if (sanitizedPassword !== sanitizedConfirmPassword) {
        console.error('Les mots de passe ne correspondent pas.');
        return;
    }

    // Retourner les valeurs nettoyées et validées
    return {
        username: sanitizedUsername,
        email: sanitizedEmail,
        password: sanitizedPassword,
        confirmPassword: sanitizedConfirmPassword
    };
}