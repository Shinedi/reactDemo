import React, { Component } from 'react';
import {connect} from 'react-redux'

class TodoList extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <input 
                        value={this.props.inputValue} 
                        onChange={this.props.changeValue} />
                    <button onClick={this.props.addItem}>增加</button>
                </div>
                <ul>
                    {this.props.list.map((item, index) => {
                        return (
                            <li key={index} onClick={()=>{this.props.deleteItem(index)}}>
                                {item}
                            </li>)
                    })}
                </ul>
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        changeValue(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        addItem() {
            dispatch({type: 'addItem'})
        },
        deleteItem(index) {
            let action = {
                type: 'deleteItem',
                index
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);