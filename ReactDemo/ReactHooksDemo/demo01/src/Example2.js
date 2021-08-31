import React, { useState } from 'react';

function Eaxmple(){
    const [age, setAge] = useState(18) // 数组解构
    const [sex, setSex] = useState('男') // 数组解构usestate不能存在于判断语句中
    const [work, setWork] = useState('前端程序员') // 数组解构
    return (
        <div>
           <p>Body今年:{age}</p>
           <p>性别:{sex}</p>
           <p>工作:{work}</p>
        </div>
    )
}
 
export default Eaxmple;