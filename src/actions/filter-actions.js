import { get } from '@/api';

module.exports = {
    setTaskGroupFilter(taskGroupId) {
        return {
            type: 'SET_TASK_GROUP_FILTER',
            payload: taskGroupId
        };
    },

    setShowCompletedFilter(showCompleted) {
        return {
            type: 'SET_SHOW_COMPLETED_FILTER',
            payload: showCompleted
        };
    },

    fetchTaskGroupDisplayOrder(taskGroupId) {
        return {
            type: 'FETCH_TASK_GROUP_DISPLAY_ORDER',
            payload: get(`/TaskGroups/${taskGroupId}/TaskDisplayOrder`)
        };
    }
};
