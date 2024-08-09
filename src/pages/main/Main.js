import React, { useEffect, useState } from 'react';
import HeaderMain from '../../components/HeaderMain';
import '../../assets/styles/main.scss';
import { getUserWithUserId } from '../../services/firebase';
import Cookies from 'js-cookie';

const Main = () => {

    const [user, setUser] = useState(null);

    function verifyUserId()
    {
        if (Cookies.get('userId'))
        {
            getUserWithUserId(Cookies.get('userId'))
            .then((user) => {
                if (!user)
                {
                    window.location.href = '/';
                }
            })
            .catch((error) => console.log(error))
        }
        else 
        {
            window.location.href = '/';
        }
    }

    useEffect(() => {
        // Vérifier que le cookie UserId existe bien et correspond à un utilisateur
        verifyUserId()

        // Récupérer l'utilisateur
        const fetchUser = async () => {
            try {
                const userId = Cookies.get('userId');
                if (userId) {
                    const user = await getUserWithUserId(userId);
                    setUser(user);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div id='Main'>
            {/* Rendre HeaderMain seulement si l'utilisateur est défini */}
            {user ? <HeaderMain user={user} /> : <div>Loading...</div>}
        </div>
    );
};

export default Main;
