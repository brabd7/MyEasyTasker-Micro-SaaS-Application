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

        // Fonction pour échapper les caractères HTML afin de prévenir les attaques XSS
        inputs[key] = escapeHtml(elements[key]);

    }

    return inputs;
}