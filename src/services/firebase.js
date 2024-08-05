import axios from "axios";

export function insertUser(user)
{
    axios.put(process.env.REACT_APP_FIREBASE + `/users/${user.username}.json`, user)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}

export function getAllUsers()
{
    axios.get(process.env.REACT_APP_FIREBASE + '/users.json')
    .then((res) => res.data)
    .catch((error) => console.log(error))
}