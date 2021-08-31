import React, {Component} from 'react'

class App extends Component{
    render() {
        return (
            <ul>
                <li>{!true ? 'JSPang.com' : '技术胖'}</li>
                <li>I love React</li>
            </ul>
        )
    }
}
export default App