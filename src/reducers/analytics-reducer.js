const initialState = {
    completedTaskCount: 0,
    totalTaskCount: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'REFRESH_ANALYTICS': {
            state = {
                ...state,
                completedTaskCount: 0,
                totalTaskCount: 0
            };
            break;
        }
    }

    return state;
}
