export const userRegister = "USER_REGISTER";

const initialState = {
    user: null,
    error: null
};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userRegister:
            return {
                ...state,
                isLogged: false,
                isFirstLoading: false,
                user: {...state.user, ...action.payload},
            };

        default:
            return state;
    }
}