import React from 'react';

function Footer() {
    const worklist = ['Hospital Management System', 'School Management System', 'Resturant Management System']
    return(
       <>
           <div><h2>My WorkList:</h2></div>
           <div>
            {
                worklist.map(work => <h2>{work}</h2>)
            }
           </div>
            
        </>
    )
}

export default Footer