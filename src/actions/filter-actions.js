import { get } from '@/api';

module.exports = {
    setTaskGroupFilter(taskGroupId) {
        return {
            type: 'SET_TASK_GROUP_FILTER',
            payload: taskGroupId
        };
    },

    setCompletionFilter(filter) {
        return {
            type: 'SET_COMPLETION_FILTER',
            payload: filter
        };
    },

    setDateFilter(filter) {
        return {
            type: 'SET_DATE_FILTER',
            payload: filter
        };
    },

    fetchTaskGroupDisplayOrder(taskGroupId) {
        return {
            type: 'FETCH_TASK_GROUP_DISPLAY_ORDER',
            payload: get(`/TaskGroups/${taskGroupId}/TaskDisplayOrder`)
        };
    }
};
