const initialState = {
    taskLists: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING
        case 'FETCH_TASK_LISTS_PENDING':
        case 'ADD_TASK_LIST_PENDING':
        case 'DELETE_TASK_LIST_PENDING': {
            state = {
                ...state
            };
            break;
        }

        // FULFILLED
        case 'FETCH_TASK_LISTS_FULFILLED': {
            state = {
                ...state,
                taskLists: action.payload || []
            };
            break;
        }

        case 'ADD_TASK_LIST_FULFILLED':
        case 'DELETE_TASK_LIST_FULFILLED': {
            state = {
                ...state
            };
            break;
        }

        // REJECTED
        case 'FETCH_TASK_LISTS_REJECTED':
        case 'ADD_TASK_LIST_REJECTED':
        case 'DELETE_TASK_LIST_REJECTED': {
            state = {
                ...state
            };
            break;
        }
    }

    return state;
}
