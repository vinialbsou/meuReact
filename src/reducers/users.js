export const userRegister = 'USER_REGISTER';
export const userRegisterSuccess = 'USER_REGISTER_SUCCESS';

const initialState = {
    userProperties: [],
};

export default function userReducer(state = initialState, action) {
    // console.log('action work', action.payload);
    switch (action.type) {
        case userRegister:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
                cpf: action.payload.cpf,
                birthDate: action.payload.birthDate,
                gender: action.payload.gender,
                city: action.payload.city,
                state: action.payload.state,
                country: action.payload.country,
            };
        case userRegisterSuccess: // check if the user was registered successfully
            return {
                ...state,
                success: true
            };
        default:
            return state;
    }
}
