import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import Authentification from '../layouts/Authentification';
import Main from '../pages/main/Main';
import Cookies from 'js-cookie';
import { getUserWithUserId } from '../services/firebase';

const Routing = () => {

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        getUserWithUserId(Cookies.get('userId'))
        .then((user) => {
            if (user)
            {
                setUserId(user.userId);
            }
        })
        .catch((error) => console.log(error))
    });

    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Authentification />}>
                {!userId ? <Route path="/" element={<Login />} /> : ''}
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Route>
            <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;