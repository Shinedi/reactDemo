import React, { Component } from 'react';
import store from './store/index'
// import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionTypes'
import {changeInputAction, addItemAction, deleteItemAction, getTodoList, getMyListAction} from './store/actionCreaters'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        // redux-thunk用法
        // const action = getTodoList()
        // store.dispatch(action)
        // axios.get('').then(res=> {
        //     console.log(1)
        // })
        const action = getMyListAction()
        store.dispatch(action)
        console.log('action', action)
    }
    render() { 
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange () {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem (index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
 
export default TodoList;