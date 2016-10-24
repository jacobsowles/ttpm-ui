import { completion, date, status } from '@/utils/filter-values';
import Array from '@/utils/array';

const initialState = {
    completion: '',
    date: [],
    displayOrders: [],
    status: [],
    taskGroupId: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TASK_GROUP_FILTER': {
            state = {
                ...state,
                taskGroupId: action.payload
            };
            break;
        }

        case 'TOGGLE_COMPLETION_FILTER': {
            state = {
                ...state,
                completion: !state.completion ? action.payload : ''
            };
            break;
        }

        case 'TOGGLE_DATE_FILTER': {
            state = {
                ...state,
                date: Array.addOrRemove(state.date, action.payload)
            };
            break;
        }

        case 'TOGGLE_STATUS_FILTER': {
            state = {
                ...state,
                status: Array.addOrRemove(state.status, action.payload)
            };
            break;
        }

        case 'FETCH_TASK_GROUP_DISPLAY_ORDER_FULFILLED': {
            state = {
                ...state,
                displayOrders: action.payload || []
            };
            break;
        }
    }

    return state;
}
