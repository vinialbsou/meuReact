import { all, fork } from 'redux-saga/effects';
import registerSaga from "./register";

export function* rootSaga() {
    yield fork(registerSaga);
    // yield all([
    //     registerSaga(),
    // ]);
}

export default rootSaga;
