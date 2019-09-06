import React, { useState } from 'react';
import useDarkMode from './useDarkMode.js';

const On = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    console.log(darkMode);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div className='top'>
            <h1>Womens World Cup</h1>
            <button onClick={toggleDark} className={darkMode ? 'toggle toggled' : 'toggle'}>Toggle Dark Mode</button>
        </div>
    )
}

export default On;