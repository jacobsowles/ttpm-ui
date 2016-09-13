const initialState = {
    tasks: [],
    filteredTasks: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // PENDING
        case 'FETCH_TASKS_PENDING':
        case 'TOGGLE_TASK_COMPLETE_PENDING':
        case 'UPDATE_TASK_PENDING':
        case 'DELETE_TASK_PENDING': {
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

        case 'TOGGLE_TASK_COMPLETE_FULFILLED':
        case 'UPDATE_TASK_FULFILLED': {
            const tasks = Object.assign([], state.tasks);
            const filteredTasks = Object.assign([], state.filteredTasks);

            tasks.splice(tasks.findIndex(t => t.Id == action.payload.Id), 1, action.payload);
            filteredTasks.splice(filteredTasks.findIndex(t => t.Id == action.payload.Id), 1, action.payload);

            state = {
                ...state,
                tasks: tasks,
                filteredTasks: filteredTasks
            };
            break;
        }

        case 'DELETE_TASK_FULFILLED': {
            const tasks = Object.assign([], state.tasks);
            const filteredTasks = Object.assign([], state.filteredTasks);

            tasks.splice(tasks.findIndex(t => t.Id == action.payload.Id), 1);
            filteredTasks.splice(filteredTasks.findIndex(t => t.Id == action.payload.Id), 1);

            state = {
                ...state,
                tasks: tasks,
                filteredTasks: filteredTasks
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
        case 'FETCH_TASKS_REJECTED':
        case 'TOGGLE_TASK_COMPLETE_REJECTED': {
            state = {
                ...state
            };
            break;
        }
    }

    return state;
}
