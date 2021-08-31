import React, { Component } from 'react';
import {connect} from 'react-redux'


const TodoList = (props) => {
    let {inputValue, inputChange, addItem, list, deleteItem} = props
    return ( 
        <div>
            <div>
                <input value={inputValue}
                    onChange={inputChange}
                />
                <button onClick={addItem}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index)=>{
                        return (
                        <li key={index} onClick={()=>{deleteItem(index)}}>
                            {item}
                        </li>)
                    })
                }
                
            </ul>
        </div>
    );
}
// class TodoList extends Component {
//     render() {
//         let {inputValue, inputChange, addItem, list, deleteItem} = this.props
//         return ( 
//             <div>
//                 <div>
//                     <input value={inputValue}
//                         onChange={inputChange}
//                     />
//                     <button onClick={addItem}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index)=>{
//                             return (
//                             <li key={index} onClick={()=>{deleteItem(index)}}>
//                                 {item}
//                             </li>)
//                         })
//                     }
                    
//                 </ul>
//             </div>
//         );
//     }
// }

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        addItem() {
            // console.log('add')
            let action = {
                type: 'addItem'
            }
            dispatch(action)
        },
        deleteItem(index) {
            console.log(index)
            let action = {type: 'deleteItem', index}
            dispatch(action)
        }
    }
}
 
export default connect(stateToProps, dispatchToProps)(TodoList);