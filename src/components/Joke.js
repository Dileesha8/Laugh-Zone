// src/components/Joke.js
import React, { useState, useEffect } from 'react';
import './Joke.css';

const Joke = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(data.setup + ' - ' + data.punchline);
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="joke">
            <h1>Random Joke Generator</h1>
            <p>{joke}</p>
        </div>
    );
};

export default Joke;
