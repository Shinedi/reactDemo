import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Index from './Pages/Index'
import Video from './Pages/Video'
import Workplace from './Pages/Workplace'
import './index.css'

function AppRouter() {
    let routeConfig = [{
        path: '/', title: '博客首页', component: Index, exact: true
    },{
        path: '/video', title: '视频教程', component: Video, exact: false
    },{
        path: '/workplace', title: '职场技能', component: Workplace, exact: false
    }]
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        {
                            routeConfig.map((item, index) => {
                                return (
                                    <li key={item.path}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )
                            })
                        }
                        {/* <li><Link to="">博客首页</Link></li>
                        <li><Link to="/video">视频教程</Link></li>
                        <li><Link to="/workplace">职场技能</Link></li> */}
                    </ul>
                </div>
                <div className="rightMain">
                    {
                        routeConfig.map((item, index) => {
                            return (
                                <Route key={item.path} path={item.path} exact={item.exact} component={item.component} />
                            )
                        })
                    }
                    {/* <Route path="/" exact component={Index}></Route>
                    <Route path="/video" exact component={Video}></Route>
                    <Route path="/workplace" exact component={Workplace}></Route> */}
                </div>
            </div>
        </Router>
    )
}

export default AppRouter