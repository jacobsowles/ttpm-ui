export default function reducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_TASK_LISTS_FULFILLED': {
            return action.payload || [];
        }
    }

    return state;
}
