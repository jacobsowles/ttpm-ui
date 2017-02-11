import { get } from 'api';

module.exports = {
    setTaskGroupFilter(taskGroupId) {
        return {
            type: 'SET_TASK_GROUP_FILTER',
            payload: taskGroupId
        };
    },

    toggleCompletionFilter(filter) {
        return {
            type: 'TOGGLE_COMPLETION_FILTER',
            payload: filter
        };
    },

    toggleDateFilter(filter) {
        return {
            type: 'TOGGLE_DATE_FILTER',
            payload: filter
        };
    },

    toggleStatusFilter(filter) {
        return {
            type: 'TOGGLE_STATUS_FILTER',
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
