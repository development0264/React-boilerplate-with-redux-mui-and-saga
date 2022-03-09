import { takeEvery } from 'redux-saga/effects';
import { REQUEST_HELLO_UPDATE } from '../Actions/dashboardAction';
import { updateHelloText } from './dashboardSaga';

function* rootSagas() {
    yield takeEvery(REQUEST_HELLO_UPDATE, updateHelloText);
    // Add more sagas here
}

export default rootSagas;