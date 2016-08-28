const initialState = {
    isLoading: false,
    isLoaded: false,
    error: '',
    projects: [],
    taskLists: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PROJECT_LIST_PENDING': {
            state = {
                ...state,
                isLoading: true,
                isLoaded: false,
                error: ''
            };
            break;
        }

        case 'FETCH_PROJECT_LIST_REJECTED': {
            state = {
                ...state,
                isLoading: false,
                isLoaded: false,
                error: 'Failed to load project list.'
            };
            break;
        }

        case 'FETCH_PROJECT_LIST_FULFILLED': {
            state = {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: '',
                projects: action.payload.Projects,
                taskLists: action.payload.TaskLists
            };
            break;
        }
    }

    return state;
}
