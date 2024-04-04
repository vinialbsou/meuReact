import {call, put, takeEvery} from 'redux-saga/effects';
import {
    userRegister
} from "../reducers/users";

function* register(action) {
    try {
        const {language} = action.payload;
        const response = yield call(userRegister, {language});
        const {status} = response;
        const responseData = response.data;

        if (status.statusCode >= 0) {
            //Send the return of the API Route to Payload
            yield put({type: userRegister, payload: {responseData}});
            //Save the return of the API Route to LocalStorage
            const userPropertiesToString = JSON.stringify(responseData);
            localStorage.setItem('userProperties', userPropertiesToString);
        } else {
            yield put({type: "GET_STATUS_FAIl", message: status.statusText});
        }
    } catch (e) {
        yield put({type: "GET_STATUS_FAIl", message: e.message});
    }
}

// Assina a saga para ser executada quando a ação 'LOGIN_REQUEST' for despachada
function* registerSaga() {
    yield takeEvery(userRegister, register);
}

export default registerSaga;