const initialState = {
    taskGroupId: 0,
    showCompleted: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASK_GROUP_FILTER': {
            state = {
                ...state,
                taskGroupId: action.payload
            };
            break;
        }

        case 'SET_SHOW_COMPLETED_FILTER': {
            state = {
                ...state,
                showCompleted: action.payload
            };
            break;
        }
    }

    return state;
}
