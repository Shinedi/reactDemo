import React, { useRef } from 'react';

function Example8(){
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = 'Hello body'
        console.log(inputEl)
    }
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>在input上展示文字</button>
        </>
    )
}

export default Example8