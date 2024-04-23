import {call, put, takeEvery} from 'redux-saga/effects';
import {userSignIn, userSignInSuccess} from "../reducers/users";
import {userLoginApi} from "../apiRequestHttp/users";
import {setAuthToken} from "../reducers/userToken";

function* signIn(action) {
    try {

        // const {language} = action.payload;
        const response = yield call(userLoginApi, action.payload);
        const {status} = response;
        const responseData = response.data;

        if (status && status.statusCode >= 0) {
            yield put({type: userSignInSuccess, payload: {token: responseData.token}})

            yield put({type: setAuthToken, payload: responseData.token});
            //Save the return of the API Route to LocalStorage
            //localStorage.setItem('token', responseData.token);

        } else {
            if (status.statusText) {
                yield put({type: "GET_STATUS_FAIl", message: status.statusText});
            }
        }
        // if (!status) {
        //     yield put({type: "GET_STATUS_FAIl", message: status.statusText});
        // }
    } catch (e) {
        yield put({type: "GET_STATUS_FAIl", message: e.message});
    }
}

// Assina a saga para ser executada quando a ação 'LOGIN_REQUEST' for despachada
function* signInSaga() {
    yield takeEvery(userSignIn, signIn);
}

export default signInSaga;