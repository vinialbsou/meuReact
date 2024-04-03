import { call, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
    userRegister
} from "../reducers/users";

function* register(action) {
    try {
        const response = yield call(axios.post, 'http://sua-api.com/login', action.payload);
        // Se a chamada for bem-sucedida, dispara uma ação para atualizar o estado do Redux
        yield put({ type: userRegister, payload: response.data });
    } catch (error) {
        // Se houver um erro na chamada, dispara uma ação para lidar com o erro
        yield put({ type: 'GET_STATUS_FAIl', error: error.message });
    }
}

// Assina a saga para ser executada quando a ação 'LOGIN_REQUEST' for despachada
function* registerSaga() {
    yield fork(userRegister, register);
}

export default registerSaga;