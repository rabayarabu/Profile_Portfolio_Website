import React from 'react';
import { Link } from 'react-router-dom';

function Greet (props) {
    console.log(props)
    return(
        <>
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hey, I'm Rabaya Aazad</h1>
            <h2> Front-end developer </h2>
            <nav>
                <Link to="/name"><button onClick={()=>{}}>Name</button></Link>
            </nav>
        </div>
        
        </>
        
    )
}

export default Greet