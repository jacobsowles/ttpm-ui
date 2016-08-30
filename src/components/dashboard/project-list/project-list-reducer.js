const initialState = {
    isLoading: false,
    error: '',
    projects: [],
    taskLists: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING

        case 'FETCH_PROJECT_LIST_PENDING':
        case 'ADD_PROJECT_PENDING':
        case 'ADD_TASK_LIST_PENDING':
        case 'DELETE_TASK_LIST_PENDING': {
            state = {
                ...state,
                isLoading: true,
                error: ''
            };
            break;
        }

        // FULFILLED

        case 'FETCH_PROJECT_LIST_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: '',
                projects: action.payload.Projects,
                taskLists: action.payload.TaskLists
            };
            break;
        }

        case 'ADD_PROJECT_FULFILLED':
        case 'ADD_TASK_LIST_FULFILLED':
        case 'DELETE_TASK_LIST_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                error: ''
            };
            break;
        }

        // REJECTED

        case 'FETCH_PROJECT_LIST_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to load project list.'
            };
            break;
        }

        case 'ADD_PROJECT_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to add a new project.'
            };
            break;
        }

        case 'ADD_TASK_LIST_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to add a new task list.'
            };
            break;
        }

        case 'DELETE_TASK_LIST_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                error: 'Failed to delete the task list.'
            };
            break;
        }
    }

    return state;
}
