import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Getup from './workplace/Getup'
import Money from './workplace/Money'

function WRouter () {
    return (
        <Router>
            <div>
            <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/workplace/money">加薪秘籍</Link>
                        </li>
                        <li>
                            <Link to="/workplace/getup">成长秘籍</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>职场软技能</h3></div>
                    <Route path="/workplace/money" component={Money} />
                    <Route path="/workplace/getup" component={Getup} />
                </div> 
            </div>
        </Router>
    )
}

export default WRouter