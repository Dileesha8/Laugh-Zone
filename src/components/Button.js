// src/components/Button.js
import React from 'react';
import './Button.css';

const Button = ({ callAPI }) => {
    return (
        <button className="button" onClick={callAPI}>
            Get New Joke
        </button>
    );
};

export default Button;
