export default function reducer(state = '', action) {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE': {
            return action.payload;
        }

        case 'SET_DEFAULT_ERROR_MESSAGE': {
            return 'The fox is in the hen house! Something has gone wrong, and we\'re very sorry.';
        }
    }

    return state;
}
