module.exports = {
    setProjectFilter(projectId) {
        return {
            type: 'SET_PROJECT_FILTER',
            payload: projectId
        };
    },

    setTaskListFilter(taskListId) {
        return {
            type: 'SET_TASK_LIST_FILTER',
            payload: taskListId
        };
    },

    setShowCompletedFilter(showCompleted) {
        return {
            type: 'SET_SHOW_COMPLETED_FILTER',
            payload: showCompleted
        };
    }
};
