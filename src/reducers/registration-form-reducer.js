const initialState = {
    isLoading: false,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_USER_PENDING': {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        case 'REGISTER_USER_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: ''
            };
            break;
        }

        case 'REGISTER_USER_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to register user.'
            };
            break;
        }
    }

    return state;
}
