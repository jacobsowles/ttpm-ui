const initialState = {
    isLoading: false,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING

        case 'REGISTER_USER_PENDING':
         {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        // FULFILLED

        case 'REGISTER_USER_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: ''
            };
            break;
        }

        // REJECTED

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
