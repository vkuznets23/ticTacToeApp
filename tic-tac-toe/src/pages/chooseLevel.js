import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/levelPage.css';

const Level = () => {
    return (
        <div className='levels'>
            <Link to="/level1" className='levelButton'>level 1</Link>
            <Link to="/level2" className='levelButton'>level 2</Link>
        </div>
    );
};

export default Level;