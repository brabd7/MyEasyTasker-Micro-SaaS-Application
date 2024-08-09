import Cookies from "js-cookie";

export function logout() {
    // Supprimer le cookie userId
    Cookies.remove('userId');

    // Rediriger vers la racine
    window.location.href = '/';
}
