import {takeEvery, put} from 'redux-saga/effects'
import {GET_MY_LIST} from './actionTypes'
import {getListAction} from './actionCreaters'

function* mySaga(){
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // setTimeout(()=> {
    //     const data = [
    //         '早8点开晨会',
    //         '早9点和项目经理开需求沟通会'
    //     ]
    //     const action = getListAction(data)
    //     put(action)
    //     console.log('data',data)
    // }, 500)
    const res = yield setTimeout(()=> {
        const data = [
            '早8点开晨会',
            '早9点和项目经理开需求沟通会'
        ]
        return data
    }, 500)
    console.log('res', res)
    const action = getListAction(res)
    yield put(action)
}

export default mySaga