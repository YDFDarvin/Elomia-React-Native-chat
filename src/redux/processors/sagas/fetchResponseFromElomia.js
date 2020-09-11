import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
    FETCH_FROM_RESPONSE_ELOMIA,
    LOAD_DATA,
    dispatchLoadData, dispatchPushMessage, PUSH_MESSAGE
} from "../../actions";
import {
    getData
} from "../../../api";

function* fetchResponseFromElomia(action) {
    try {
        const response = yield call(getData());
        const gotResponseDate = Date.now()

        yield put(dispatchPushMessage({
            text: action.payload.message.text,
            created_at: action.payload.message.created_at,
            isMyMessage: true
        }))
        yield put(dispatchPushMessage({
            text: `IP: ${response.ip}, delta: ${gotResponseDate - action.payload.message.created_at} ms, text: ${action.payload.message.text}`,
            created_at: action.payload.message.created_at,
            isMyMessage: false
        }))
    } catch (e) {
        yield put({type: "", message: e.message});
    }
}

export function* fetchResponseFromElomiaWrapper() {
    yield takeLatest(FETCH_FROM_RESPONSE_ELOMIA, fetchResponseFromElomia);
}