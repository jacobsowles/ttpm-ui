export default function reducer(state = {}, action) {
    switch (action.type) {
        case 'LOGOUT_FULFILLED': {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            return state;
        }
    }

    return state;
}
