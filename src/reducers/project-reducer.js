export default function reducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_PROJECTS_FULFILLED': {
            return action.payload || [];
        }
    }

    return state;
}
