import { all } from 'redux-saga/effects'
import {
} from "../../actions";
import {
    fetchProductWrapper
} from "./fetchProducts"

function* rootSaga() {
    yield all([
        fetchProductWrapper
    ])
}

export default rootSaga;