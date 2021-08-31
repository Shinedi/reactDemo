import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
const sagaMiddleware = createSagaMiddleware()

// 增强函数类似于链式调用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

// const enhancer = composeEnhancers(applyMiddleware(thunk))
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// createStore只能接收两个参数，要传递三个或多个参数，可以借助增强函数
const store = createStore(
    reducer,
    enhancer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
sagaMiddleware.run(mySaga)
export default store