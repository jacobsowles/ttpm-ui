const initialState = {
    projectId: 0,
    taskListId: 0,
    showCompleted: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PROJECT_FILTER': {
            state = {
                ...state,
                projectId: action.payload,
                taskListId: 0
            };
            break;
        }

        case 'SET_TASK_LIST_FILTER': {
            state = {
                ...state,
                taskListId: action.payload
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
                activeTaskListId: action.payload,
                filteredTasks: tasks.filter(function(task) {
                    return task.TaskListId == action.payload;
                })
            };
            break;
        }
    }

    return state;
}
