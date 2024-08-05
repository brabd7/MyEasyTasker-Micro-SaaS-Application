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
function validateInputString(value, type) 
{
    // Validation de base pour les chaînes de caractères
    if (typeof value !== 'string' || value.trim().length === 0) {
        return false;
    }
    return true;
}

// Fonction pour valider les emails
export function validateInputEmail(value)
{
    // Validation simple d'une adresse email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}

// Fonction de processus de nettoyage d'entrée
export function inputCleaningProcess(elements)
{
    const inputs = {};
    
    // Pour chaque clé dans l'objet 'elements'
    for (const key in elements) {
        const escapeElement = escapeHtml(elements[key]);

        console.log(typeof escapeElement)
    }

    return inputs;
}