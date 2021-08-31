import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Index () {
    useEffect(()=>{
        console.log('useEffect=> 老弟，你来了Index页面 ')
        return () => {
            console.log('老弟，你走了Index页面')
        }
    }, [])
    return <h2>JSPang</h2>
}
function List () {
    useEffect(()=>{
        console.log('useEffect=> 老弟，你来了List页面 ')
        return () => {
            console.log('老弟，你走了List页面')
        }
    })
    return <h2>List Page</h2>
}

function Eaxmple(){
    const [num, setNum] = useState(0) // 数组解构
    useEffect(()=> { // 异步的，代替生命周期函数componentDidMount和componentDidUpdate
        console.log(`useEffect=> you clicked ${num}`)
        return ()=> {
            console.log('==========')
        }
    }, [num]) // num发生变化时才实现解绑，[]代表切换时解绑
    return (
        <div>
            you click me {num} times
            <button onClick={()=>{setNum(num+1)}}>点我</button>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list">列表</Link></li>
                    
                </ul>
                <Route exact path="/" component={Index} />
                <Route path="/list" component={List} />
                
            </Router>
        </div>
    )
}
 
export default Eaxmple;