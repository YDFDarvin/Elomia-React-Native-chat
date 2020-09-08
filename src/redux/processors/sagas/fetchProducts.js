import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
} from "../../actions";
import {
    getProducts
} from "../../../api";

function* fetchProducts(action) {
    try {
        const products = yield call(getProducts(action.payload));

        yield put({type: "", payload: products});
    } catch (e) {
        yield put({type: "", message: e.message});
    }
}

export function* fetchProductWrapper() {
    yield takeLatest("", fetchProducts);
}