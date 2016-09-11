const initialState = {
    message: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE': {
            state = {
                ...state,
                message: action.payload
            };
            break;
        }

        case 'SET_DEFAULT_ERROR_MESSAGE': {
            state = {
                ...state,
                message: 'The fox is in the hen house! Something has gone wrong, and we\'re very sorry.'
            };
            break;
        }
    }

    return state;
}
