const Filterer = class Filterer {
    constructor(tasks, filters) {
        this.tasks = tasks;
        this.filters = filters;
    }

    filter() {
        return this.tasks.filter(this.taskGroupFilter);
    }

    get taskGroupFilter() {
        return (
            this.filters.taskGroupId
                ? task => task.TaskGroupId == this.filters.taskGroupId
                : () => true
        );
    }
};

export default Filterer;
