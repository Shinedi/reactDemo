import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {cid: 123, title: '技术胖的博客123'},
                {cid: 456, title: '技术胖的博客456'},
                {cid: 789, title: '技术胖的博客789'},
            ]
        }
        this.props.history.push('/home')
    }
    render() { 
        return ( 
            <div>
                {/* <Redirect to='/home' /> */}
                <h2>JSpang</h2>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/list/${item.cid}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default Index;