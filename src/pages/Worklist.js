import React, {useState} from 'react';

function Worklist() {
    const list = ['Hospital Management System', 'Resturant Management System']
    
    const [worklist, setList] = useState(list)

    const showList = () => {
        console.log('list')
        setList([...worklist, {id: list.index}])
        

    }
    
    return(
       <>
           <div>
               <button onClick={() => showList}>My WorkList</button></div>
           <div>
            <ul>
            {
                list.map(work => (<li key={list.index}>{work}</li>))}

            </ul>
                
            
           </div>
            
        </>
    )
}

export default Worklist