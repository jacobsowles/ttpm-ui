const initialState = {
    isLoading: false,
    error: '',
    tasks: [],
    filteredTasks: []
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
                tasks: action.payload.Tasks,
                filteredTasks: action.payload.Tasks
            };
            break;
        }

        // FILTER
        case 'FILTER_TASK_TABLE_BY_PROJECT': {
            const taskListIds = action.payload.taskLists.filter(function(taskList) {
                return taskList.ProjectId == action.payload.projectId;
            }).map(function(taskList) {
                return taskList.Id;
            });

            state = {
                ...state,
                isLoading: false,
                error: '',
                filteredTasks: state.tasks.filter(function(task) {
                    return taskListIds.includes(task.TaskListId);
                })
            };
            break;
        }

        case 'FILTER_TASK_TABLE_BY_TASK_LIST': {
            state = {
                ...state,
                isLoading: false,
                error: '',
                filteredTasks: state.tasks.filter(function(task) {
                    return task.TaskListId == action.payload;
                })
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
