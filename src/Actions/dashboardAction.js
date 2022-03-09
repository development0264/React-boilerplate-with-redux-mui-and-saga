import { put } from "redux-saga/effects";

export const REQUEST_HELLO_UPDATE = "REQUEST_HELLO_UPDATE";
export const HELLO_UPDATE = "HELLO_UPDATE";

export const requestUpdateHelloText = (data) => {
    return { type: REQUEST_HELLO_UPDATE, payload: data };
}