import { spawn } from 'redux-saga/effects'

import {
    fetchResponseFromElomiaWrapper
} from "./fetchResponseFromElomia"

function* rootSaga() {
    yield spawn(fetchResponseFromElomiaWrapper)
}

export default rootSaga;