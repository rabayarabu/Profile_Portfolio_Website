import React, { useState } from 'react';

function Worklist() {
    const isClicked = true ;
    const list = ['Hospital Management System', 'Resturant Management System']
    const [worklist, setList] = useState(list)
    const showList = () => {    
        setList([{worklist} ])
    }
    return (
        <>
            <div>
              { isClicked ? (<button onClick={showList}>My WorkList</button>)
               : (<div>
                    <ul>
                        {
                            list.map(worklist => (<li key={worklist}>{worklist}</li>))
                        }
                    </ul>
                </div>)
                }
            </div>
       </>
    )
}

export default Worklist