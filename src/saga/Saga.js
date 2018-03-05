import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'

export function* test() {
    yield delay(1000)
    console.log('HELLO')
}


export default function* rootSaga() {
    // REGISTER actions
    yield takeEvery("ACTION_TEST", test)
}




