export const setAuthToken = 'SET_AUTH_TOKEN';

const initialState = {
    authToken: null,
};

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setAuthToken':
            return {
                ...state,
                authToken: action.payload,
            };
        default:
            return state;
    }
};

export default tokenReducer;