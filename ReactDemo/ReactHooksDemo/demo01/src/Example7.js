import React, { useState } from 'react';

function Example7 (){
    const [xiaohong, setXiaohong] = useState('小红在看剧')
    const [zhiling, setZhiling] = useState('志玲在健身')
    return (
        <>
            <button onClick={setXiaohong(new Date().getTime())}>呼叫小红</button>
            <button onClick={setZhiling(new Date().getTime()+'志玲')}>呼叫志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </>
    )
}

function ChildComponent ({name, children}) {
    function changeXiaohong () {
        console.log('她来了，小红来了')
        return name+'小红向我们走来了'
    }
    const actionXiaohong = changeXiaohong(name)
    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7