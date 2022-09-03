import React, { useState } from 'react';

function Worklist() {
    const [isClicked,setClicked] = useState(false) ;
    const list = ['Hospital Management System', 'Resturant Management System']
    const listItems = list.map((item) =>(
    <li>
        {item}
    </li>))
    // const showList=()=>{
    //     setClicked(true)
    // }
    // const [worklist, setList] = useState(list)
    
    return (
        <>
            <div>
              { isClicked==false ? (<button onClick={()=>{setClicked(true)}}>My Worklist</button>)
               : (<div>
                    <ul>{listItems}</ul>
                    <button onClick={()=>{setClicked(false)}}>Close List</button>
                 </div>)
                }
            </div>
       </>
    )
}

export default Worklist