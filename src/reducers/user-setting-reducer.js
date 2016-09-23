export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'FETCH_USER_SETTINGS_FULFILLED': {
            state = {
                ...state,
                defaultShowAnalytics: action.payload.find(us => us.Id == 1)
            };
        }
    }

    return state;
}
