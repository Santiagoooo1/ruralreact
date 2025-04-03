import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
            </Routes>
        </div>
    );
}

export default App;
