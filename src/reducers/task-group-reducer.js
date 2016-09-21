export default function reducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_TASK_GROUPS_FULFILLED': {
            return action.payload || [];
        }
    }

    return state;
}
