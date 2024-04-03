import {fork} from "redux-saga/effects";

import registerSaga from "./register";

/**
 * Fork all the sagas :)
 */
export function* rootSaga() {
    yield fork(registerSaga);
}

export default rootSaga;
