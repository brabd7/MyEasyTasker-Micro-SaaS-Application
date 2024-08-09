import React, { useEffect, useState } from 'react';
import HeaderMain from '../../components/HeaderMain';
import '../../assets/styles/main.scss';
import { getUserWithUserId } from '../../services/firebase';
import Cookies from 'js-cookie';

const Main = () => {
    const [user, setUser] = useState(null);

    // Récupérons les données de l'utilisateur
    useEffect(() => {
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
    }, []); // Le tableau de dépendances vide assure que l'effet est exécuté uniquement une fois au montage

    return (
        <div id='Main'>
            {/* Rendre HeaderMain seulement si l'utilisateur est défini */}
            {user ? <HeaderMain user={user} /> : <div>Loading...</div>}
        </div>
    );
};

export default Main;
