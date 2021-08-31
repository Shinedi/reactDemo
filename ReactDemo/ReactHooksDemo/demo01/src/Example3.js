import React, { Component } from 'react';
class Example3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }
    componentDidMount() {
        console.log(`componentDidMount=> you clicked ${this.state.num}`)
    }
    componentDidUpdate() {
      console.log(`componentDidUpdate=> you clicked ${this.state.num}`)
    }
    render() {
        return (
            <div>
                you click me {this.state.num} times
                <button onClick={this.addNum.bind(this)}>点我</button>
            </div>
        )
    }
    addNum() {
        this.setState({
            num: this.state.num+1
        })
    }
}
 
export default Example3;