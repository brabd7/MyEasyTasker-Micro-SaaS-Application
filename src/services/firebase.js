import axios from "axios";
import { createError, removeError } from "../utils/form";

export function insertUser(user)
{
    axios.put(process.env.REACT_APP_FIREBASE + `/users/${user.username}.json`, user)
    .then((res) => console.log(res))
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
        // Convert the users object to an array
        const usersArray = Object.values(users);

        // Find the user with the specified username
        const user = usersArray.find(user => user.username === username);
        return user;
    })
    .catch((error) => console.log(error))
}

export function getUserWithEmail(email)
{
    getAllUsers()
    .then((users) => {
        // Convert the users object to an array
        const usersArray = Object.values(users);

        // Find the user with the specified email
        const user = usersArray.find(user => user.email === email);
        return user;
    })
    .catch((error) => console.log(error))
}

export function notExistUser(escapeUsername)
{
    getUserWithUsername(escapeUsername)
    .then((user) => {
        if (user)
        {
            createError("Le nom d'utilisateur existe déjà !")
            return false;
        }
        else 
        {
            removeError();
            return true;
        }
    })
    .catch((error) => console.log(error))
}