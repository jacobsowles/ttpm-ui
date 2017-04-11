const initialState = {
    error: '',
    isLoggingIn: false,
    isLoggingOut: false,
    isRegistering: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_PENDING': {
            state = {
                ...state,
                error: '',
                isLoggingIn: true
            };
            break;
        }

        case 'LOGIN_FULFILLED': {
            state = {
                ...state,
                error: '',
                isLoggingIn: false
            };
            break;
        }

        case 'LOGIN_REJECTED': {
            state = {
                ...state,
                error: 'Login failed.',
                isLoggingIn: false
            };
            break;
        }

        case 'LOGOUT_PENDING': {
            state = {
                ...state,
                error: '',
                isLoggingOut: true
            };
            break;
        }

        case 'LOGOUT_FULFILLED': {
            state = {
                ...state,
                error: '',
                isLoggingOut: false
            };
            break;
        }

        case 'LOGOUT_REJECTED': {
            state = {
                ...state,
                error: 'Logout failed.',
                isLoggingOut: false
            };
            break;
        }

        case 'REGISTER_PENDING': {
            state = {
                ...state,
                error: '',
                isRegistering: true
            };
            break;
        }

        case 'REGISTER_FULFILLED': {
            state = {
                ...state,
                error: '',
                isRegistering: false
            };
            break;
        }

        case 'REGISTER_REJECTED': {
            state = {
                ...state,
                error: 'Failed to register user.',
                isRegistering: false
            };
            break;
        }
    }

    return state;
}
