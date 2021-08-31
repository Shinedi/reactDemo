import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() { 
        console.log('child render')
        return ( 
            <li onClick={this.handleClick}>
              {this.props.avname}为你服务 - {this.props.content}
            </li>
        );
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            console.log('hhfhfh')
            return true
        } else {
            return false
        }
    }
    // 组件第一次存在于dom中，函数是不会被执行
    // 如果已经存在于DOM中，函数才会被执行
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('child componentWillUnmount -- 组件被删除之前')
    }
    handleClick() {
        // console.log(this.props.index)
        // console.log(this.props.deleteItem)
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes = {
    avname: PropTypes.string.isRequired,
    content: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps = {
    avname: '松岛枫'
}

export default XiaojiejieItem