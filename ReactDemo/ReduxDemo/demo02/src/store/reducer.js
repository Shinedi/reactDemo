const defaultState = {
    inputValue: 'write somthing',
    list: []
}

export default (state=defaultState, action)=> {
    if (action.type==='change_input') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if(action.type==='addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if(action.type === 'deleteItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}