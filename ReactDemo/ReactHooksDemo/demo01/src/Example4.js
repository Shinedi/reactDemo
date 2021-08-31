import React, { useState, createContext, useContext } from 'react';
import Counter from './Counter'

export const NumContext = createContext()

// function Counter() {
//     let num = useContext(NumContext)
//     return (<h2>{num}</h2>)
// }

function Eaxmple4(){
    const [num, setNum] = useState(0) // 数组解构
    
    return (
        <div>
            you click me {num} times
            <button onClick={()=>{setNum(num+1)}}>点我</button>
            <NumContext.Provider value={num}>
                <Counter></Counter>
            </NumContext.Provider>
        </div>
    )
}
 
export default Eaxmple4;