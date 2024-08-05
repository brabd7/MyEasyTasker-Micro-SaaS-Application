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
        document.querySelector('.errorEmail').style.display = "none"
        return true;  // Email valide
    } else {
        document.querySelector('.errorEmail').style.display = "block"
        return false; // Email invalide
    }
}


// Fonction pour la validité des mots de passe
export function validatePasswords(password, confirmPassword)
{
    // Nombre de caractères du mot de passe
    if (password.length >= 8)
    {
        // Vérifier la correspondance des mots de passe
        if (password === confirmPassword)
        {
            console.log('ok')
        }
    }
    else 
    {
        console.log("Mot de passe doit faire 8 caractères")
    }
}

// Fonction pour créer un paragraphe d'erreur
export function createError(string)
{
    
}