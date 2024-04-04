import userRegistration from "../components/SignUp";

export const userRegister = (nome, email, senha, cpf, dataNascimento, cidade, estado, pais) => ({
    type: 'USER_REGISTER',
    payload: { nome, email, senha, cpf, dataNascimento, cidade, estado, pais },
});

const initialState = {
    userProperties: [],
};
console.log(userRegister, 'teste');
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
