import { put } from "redux-saga/effects";

export function* updateHelloText(action) {
    return yield put({ type: HELLO_UPDATE, payload: action.payload });
}