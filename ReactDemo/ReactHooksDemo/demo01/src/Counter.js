import React, {useContext, createContext} from 'react';
import {NumContext} from './Example4'


function Counter() {
    let num = useContext(NumContext)
    return (<h2>{num}</h2>)
}

export default Counter