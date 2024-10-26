import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Level1 from './pages/game';
import ChooseLevel from './pages/chooseLevel';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/chooseLevel" element={<ChooseLevel/>}/>
                    <Route path="/level1" element={<Level1 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
