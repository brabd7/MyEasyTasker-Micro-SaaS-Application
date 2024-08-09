import React from 'react';

const Button = (props) => {

    const buttonStyle = {
        display: "flex",
        alignItems: "center", 
        gap: "7px",
        padding: "5px 7px",
        borderRadius: "5px", 
        cursor: "pointer"
    };

    return (
        <div id='Button' className={props.className} style={buttonStyle}>
            <i className={props.icon}></i>
            <p>{props.text}</p>
        </div>
    );
};

export default Button;
