import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';  // Предположительно твоя домашняя страница
import Game from './pages/game';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />   {/* Маршрут для главной страницы */}
                    <Route path="/game" element={<Game />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
