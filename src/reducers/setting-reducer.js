const initialState = {
    defaultShowAnalytics: { DefaultValue: true }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_SETTINGS_FULFILLED': {
            state = {
                ...state,
                defaultShowAnalytics: action.payload.find(us => us.Id == 1)
            };
        }
    }

    return state;
}
