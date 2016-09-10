const initialState = {
    isLoading: false,
    error: '',
    tasks: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING
        case 'FETCH_TASK_TABLE_PENDING': {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        // FULFILLED
        case 'FETCH_TASK_TABLE_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: '',
                tasks: action.payload.Tasks
            };
            break;
        }

        // REJECTED
        case 'FETCH_TASK_TABLE_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to get tasks.'
            };
            break;
        }
    }

    return state;
}
