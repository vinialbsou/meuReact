export const userRegister = 'USER_REGISTER';

const initialState = {
    userProperties: [],
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case userRegister:
            return {
                ...state,
                userProperties: action.payload,
            };

        default:
            return state;
    }
}
