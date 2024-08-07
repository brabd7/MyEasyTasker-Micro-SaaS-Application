import axios from "axios";

export function insertUser(user)
{
    axios.put(process.env.REACT_APP_FIREBASE + `/users/${user.username}.json`, user)
    .then((res) => res)
    .catch((error) => console.log(error))
}

export function getAllUsers()
{
    return axios.get(process.env.REACT_APP_FIREBASE + '/users.json')
    .then((res) => res.data)
    .catch((error) => console.log(error))
}

export function getUserWithUsername(username)
{
    return getAllUsers()
    .then((users) => {
        if (users)
        {
            // Convert the users object to an array
            const usersArray = Object.values(users);

            // Find the user with the specified username
            const user = usersArray.find(user => user.username === username);
            return user;
        }
    })
    .catch((error) => console.log(error))
}

export function getUserWithEmail(email)
{
    return getAllUsers()
    .then((users) => {
        if (users)
        {
            // Convert the users object to an array
            const usersArray = Object.values(users);

            // Find the user with the specified email
            const user = usersArray.find(user => user.email === email);
            return user;
        }
    })
    .catch((error) => console.log(error))
}

export function generateCookie()
{
    // Utilisation de crypto pour obtenir un ArrayBuffer aléatoire
    const array = new Uint8Array(32); // Vous pouvez ajuster la taille selon vos besoins
    window.crypto.getRandomValues(array);

    // Conversion du ArrayBuffer en chaîne hexadécimale
    const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');

    return token;
}