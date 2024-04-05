import {call, put, takeEvery} from 'redux-saga/effects';
import {
    userRegister
} from "../reducers/users";
import {userRegisterApi} from "../apiRequestHttp/users";

function* register(action) {
    try {
        const {language} = action.payload;
        const response = yield call(userRegisterApi, {language});
        const {status} = response;
        const responseData = response.data;

        if (status && status.statusCode >= 0) {
            // const {
            //     data: {lastUpdated, reloadUi, notificationBar},
            // } = response;

            yield put({type: 'USER_REGISTER_SUCCESS', payload: {responseData}});
            //Save the return of the API Route to LocalStorage
            const userPropertiesToString = JSON.stringify(responseData);
            localStorage.setItem('userProperties', userPropertiesToString);

        }
        if (!status) {
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