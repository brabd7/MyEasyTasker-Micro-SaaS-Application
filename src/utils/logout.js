import Cookies from "js-cookie"

export function logout()
{
    // Supprimer le cookie userId
    Cookies.remove('userId');

    // Aller à la page de login
    window.location.reload();
}