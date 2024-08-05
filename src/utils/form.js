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

// Fonction pour valider les emails
export function validateInputEmail(value)
{
    // Validation simple d'une adresse email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
}


