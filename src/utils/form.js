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

// export function processRegistration()
// {
//     // Vérifier la validité de l'email
//     if (validateInputEmail(document.querySelector('.inputEmail').value))
//     {
//         // Enregistrer l'email
//         email = document.querySelector('.inputEmail').value;
//         document.querySelector('.errorEmail').style.display = "none";

//         // Vérifier la correspondance des mots de passe
//         if (password === confirmPassword)
//         {
//             document.querySelector('.errorPassword').style.display = "none";

//             // Processus de nettoyage des entrées
//             const inputCleaningProcessCompleted = inputCleaningProcess({username: username, email: email, password: password});

//             // // Envoyer dans la base de données
//             // insertUser(inputCleaningProcessCompleted);
//         }
//         else 
//         {
//             // Afficher l'erreur
//             document.querySelector('.errorPassword').style.display = "block";
//         }
//     }
//     else 
//     {
//         // Afficher l'erreur
//         document.querySelector('.errorEmail').style.display = "block";
//     }
// }