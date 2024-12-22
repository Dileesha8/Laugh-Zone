// src/App.js
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import './components/Joke.css'; // Add Joke CSS
import './components/Button.css'; // Add Button CSS

function App() {
    // State to store the joke
    const [joke, setJoke] = useState('');

    // Function to fetch a new joke
    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            setJoke(data.setup + ' - ' + data.punchline); // Update the state
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    return (
        <div className="App">
            <h1>Random Joke Generator</h1>
            {/* Display joke dynamically */}
            <p className="joke">{joke || "Click the button to get a joke!"}</p>

            {/* Button to fetch a new joke */}
            <Button callAPI={fetchJoke} />
        </div>
    );
}

export default App;
