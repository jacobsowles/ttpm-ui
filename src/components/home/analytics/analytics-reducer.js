const initialState = {
    isLoading: false,
    error: '',
    completedTaskCount: 0,
    totalTaskCount: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'REFRESH_ANALYTICS': {
            state = {
                ...state,
                isLoading: false,
                error: '',
                completedTaskCount: 0,
                totalTaskCount: 0
            };
            break;
        }
    }

    return state;
}
