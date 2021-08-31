import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = ()=> {
    return (dispatch)=> {
        // debugger
        setTimeout(()=> {
            const data = [
                '早8点开晨会',
                '早9点和项目经理开需求沟通会'
            ]
            const action = getListAction(data)
            dispatch(action)
            console.log('data',data)
        }, 500)
    }
}

export const getMyListAction =()=> ({
    type: GET_MY_LIST
})