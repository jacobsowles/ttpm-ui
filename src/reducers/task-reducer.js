export default function reducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_TASKS_FULFILLED': {
            return action.payload || [];
        }

        case 'CREATE_TASK_FULFILLED': {
            const tasks = Object.assign([], state);
            tasks.push(action.payload);

            return tasks;
        }

        case 'TOGGLE_TASK_COMPLETE_FULFILLED':
        case 'UPDATE_TASK_FULFILLED': {
            const tasks = Object.assign([], state);
            tasks.splice(tasks.findIndex(t => t.Id == action.payload.Id), 1, action.payload);

            return tasks;
        }

        case 'DELETE_TASK_FULFILLED': {
            const tasks = Object.assign([], state);
            tasks.splice(tasks.findIndex(t => t.Id == action.payload.Id), 1);

            return tasks;
        }
    }

    return state;
}
