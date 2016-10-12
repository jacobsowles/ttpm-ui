import { saveAuthentication } from '@/utils/auth';

const initialState = {
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_PENDING': {
            state = {
                ...state,
                error: ''
            };
            break;
        }

        case 'LOGIN_FULFILLED': {
            saveAuthentication(action.payload['userName'], action.payload['access_token']);

            state = {
                ...state,
                error: ''
            };
            break;
        }

        case 'LOGIN_REJECTED': {
            state = {
                ...state,
                error: 'Login failed.'
            };
            break;
        }
    }

    return state;
}
