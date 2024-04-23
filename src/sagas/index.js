import { all, fork } from 'redux-saga/effects';
import registerSaga from "./register";
import signInSaga from "./signIn";

export function* rootSaga() {
    yield fork(registerSaga);
    yield fork(signInSaga);
    // yield all([
    //     registerSaga(),
    // ]);
}

export default rootSaga;
