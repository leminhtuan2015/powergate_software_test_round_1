import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'

import DataReducer from '../reducers/DataReducer'
import RootNavigatorReducer from '../navigator/RootNavigatorReducer'
import rootSaga from '../saga/Saga'

const reducers = combineReducers({
    dataState: DataReducer,
    nav: RootNavigatorReducer,
});

const sagaMiddleware = createSagaMiddleware()
let Store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default Store;
