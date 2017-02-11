import { saveAuthentication } from 'utils/auth/auth';

const initialState = {
    error: '',
    isLoading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_PENDING': {
            state = {
                error: '',
                isLoading: true
            };
            break;
        }

        case 'LOGIN_FULFILLED': {
            saveAuthentication(action.payload['userName'], action.payload['access_token']);

            state = {
                error: '',
                isLoading: false
            };
            break;
        }

        case 'LOGIN_REJECTED': {
            state = {
                error: 'Login failed.',
                isLoading: false
            };
            break;
        }
    }

    return state;
}
