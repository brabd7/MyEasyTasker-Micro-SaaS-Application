import axios from "axios";

export function insertUser(user)
{
    axios.post(process.env.REACT_APP_FIREBASE + '/users.json', user)
    .then((res) => console.log(res))
    .catch((error) => console.log(error))
}