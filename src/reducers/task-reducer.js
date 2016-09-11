const initialState = {
    tasks: [],
    filteredTasks: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING
        case 'FETCH_TASKS_PENDING': {
            state = {
                ...state
            };
            break;
        }

        // FULFILLED
        case 'FETCH_TASKS_FULFILLED': {
            state = {
                ...state,
                tasks: action.payload || [],
                filteredTasks: action.payload || []
            };
            break;
        }

        // FILTER
        case 'FILTER_TASKS_BY_PROJECT': {
            const tasks = state.tasks || [];
            const taskLists = action.payload.taskLists || [];

            const taskListIds = taskLists.filter(function(taskList) {
                return taskList.ProjectId == action.payload.projectId;
            }).map(function(taskList) {
                return taskList.Id;
            });

            state = {
                ...state,
                filteredTasks: state.tasks.filter(function(task) {
                    return taskListIds.includes(task.TaskListId);
                })
            };
            break;
        }

        case 'FILTER_TASKS_BY_TASK_LIST': {
            const tasks = state.tasks || [];
            state = {
                ...state,
                filteredTasks: tasks.filter(function(task) {
                    return task.TaskListId == action.payload;
                })
            };
            break;
        }

        // REJECTED
        case 'FETCH_TASKS_REJECTED': {
            state = {
                ...state
            };
            break;
        }
    }

    return state;
}
