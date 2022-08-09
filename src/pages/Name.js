import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


function Name() {
    
    return(
        <>
        <div>
            <h1>Hey, I'm Rabaya Aazad</h1>
            <h2> Front-end developer </h2>
            <nav>
                <Link to="/instagram">Name</Link>
            </nav>
        </div>
        
        </>
    )
}

export default Name