const initialState = {
    error: '',
    isLoading: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'REGISTER_USER_PENDING': {
            state = {
                error: '',
                isLoading: true
            };
            break;
        }

        case 'REGISTER_USER_FULFILLED': {
            state = {
                error: '',
                isLoading: false
            };
            break;
        }

        case 'REGISTER_USER_REJECTED': {
            state = {
                error: 'Failed to register user.',
                isLoading: false
            };
            break;
        }
    }

    return state;
}
