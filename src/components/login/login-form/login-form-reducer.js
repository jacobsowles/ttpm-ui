const initialState = {
    isLoading: false,
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING

        case 'SOMETHING_PENDING':
         {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        // FULFILLED

        case 'SOMETHING_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: ''
            };
            break;
        }

        // REJECTED

        case 'SOMETHING_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to _______.'
            };
            break;
        }
    }

    return state;
}
