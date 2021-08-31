import React from 'react'
import {BrowserRouter as Router,Route, Link} from 'react-router-dom'

// Router在最外层包裹下就可以了
import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'


function Video () {
    return (
        <Router>
            <div>
                <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/video/reactpage/">react教程</Link>
                        </li>
                        <li>
                            <Link to="/video/flutter/">flutter教程</Link>
                        </li>
                        <li>
                            <Link to="/video/vue/">Vue教程</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>视频教程</h3></div>
                    <Route path="/video/reactpage/" component={ReactPage} />
                    <Route path="/video/flutter/" component={Flutter} />
                    <Route path="/video/vue/" component={Vue} />
                </div>
            </div>
        </Router>
        
    )
}

export default Video