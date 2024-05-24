// src/App.js
import React from 'react';
import Navbar from './Navbar';
import Card from './Card';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4">
                <Card />
            </div>
        </div>
    );
}

export default App;

