import React, {Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import axios from 'axios'

class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背',]
        }
    }
    // componentWillMount() {
    //     console.log('componentWillMount --- 组件将要挂载到页面的时刻')
    // }
    componentDidMount() {
        
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then(res => {
                console.log('axios获取数据成功：', JSON.stringify(res))
            }).catch(e=> {
                console.log('获取数据失败：',e)
            })
        console.log('componentDidMount --- 组件挂载完成的时刻')
    }
    shouldComponentUpdate() {
        console.log('1 shouldComponentUpdate --- 在组件更新之前执行')
        // 返回false页面时不执行，这个生命周期适用于优化性能
        return true
    }
    componentWillUpdate() {
        console.log('2 componentWillUpdate --- 在组件更新之前执行')
    }
    componentDidUpdate() {
        // 加载数据
        console.log('4 componentWillUpdate --- 在组件更新之后执行')
    }
    render () {
        console.log('3 render --- 组件挂载中')
        return (
            <Fragment>
                {/* 第一次注释 */}
                <div>
                    <label htmlFor="jsPang">增加服务：</label>
                    <input 
                        id="jsPang" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)}
                        ref={input => {this.input = input}}
                    /> 
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ul => this.ul = ul}>
                    {
                        this.state.list.map((item, index)=> {
                            return (
                                <XiaojiejieItem
                                    content={item}
                                    key={index+item}
                                    index={index}
                                    list={this.state.list}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    inputChange(e) {
        // 通过setState来修改值
        // this.state.inputValue = e.target.value
        this.setState({
            inputValue: this.input.value // e.target.value
        })
    }
    addList() {
       // setState是异步的
       this.setState({
           list: [...this.state.list, this.state.inputValue],
           inputValue: ''
       }, ()=> {
        console.log(this.ul.querySelectorAll('li').length)
       })
    }
    deleteItem(index) {
        let list = JSON.parse(JSON.stringify(this.state.list))
        console.log('length',list.length)
        list.splice(index, 1)
        this.setState({
            list
        })
    }
}

export default Xiaojiejie
