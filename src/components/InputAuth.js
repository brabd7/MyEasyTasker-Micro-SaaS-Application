import React, { useState } from 'react';
import '../assets/styles/auth.scss';

const InputAuth = (props) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div id='InputAuth'>
            <i className={`${props.icon} ${isFocused ? 'fa-flip' : ''}`}></i>
            <input
                type={props.type}
                name={props.className}
                placeholder={props.placeholder}
                className={props.className}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default InputAuth;
