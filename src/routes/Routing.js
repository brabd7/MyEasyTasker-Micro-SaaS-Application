import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';
import Authentification from '../layouts/Authentification';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Authentification />}>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;