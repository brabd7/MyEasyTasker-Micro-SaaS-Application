import { Avatar } from '@mui/material';
import React from 'react';
import '../assets/styles/main.scss';
import Button from './Button';
import { logout } from '../utils/logout';

const HeaderMain = (props) => {

    // Les données de l'utilisateur
    const user = props.user;

    return (
        <div id='HeaderMain'>
            <div className='left'>
                <Avatar
                    alt="Remy Sharp"
                    src="https://i.pinimg.com/originals/06/d3/7f/06d37f864d89f3e6ab569f2f007d1d60.jpg"
                    sx={{width: 55, height: 55}}
                />
                <p>Hello, <br /> {user.username}</p>
            </div>
            <div className='right'>
                <Button text="Ajouter une tâche" className="addNoteButton" icon="fa-solid fa-plus"/>
                <i className="fa-solid fa-gear"></i>
                <i className="fa-solid fa-right-from-bracket" onClick={logout}></i>
            </div>
        </div>
    );
};

export default HeaderMain;