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
    }
};
