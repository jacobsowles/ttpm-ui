export default function reducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_TASK_GROUPS_FULFILLED': {
            return action.payload || [];
        }

        case 'UPDATE_TASK_GROUP_FULFILLED': {
            const taskGroups = Object.assign([], state);
            taskGroups.splice(taskGroups.findIndex(tg => tg.Id == action.payload.Id), 1, action.payload);
        }
    }

    return state;
}
