import { completion, date, status } from '@/utils/filter-values';

const Filterer = class Filterer {
    constructor(tasks, filters) {
        this.tasks = tasks;
        this.filters = filters;
    }

    filter() {
        return this.tasks.filter((task) => {
            return (
                this.filterByCompletion(task) &&
                this.filterByStatus(task) &&
                this.filterByTaskGroup(task)
            );
        });
    }

    filterByCompletion(task) {
        let result = true;

        if (this.filters.completion == completion.COMPLETE) {
            result = task.Complete;
        }

        else if (this.filters.completion == completion.INCOMPLETE) {
            result = !task.Complete;
        }

        return result;
    }

    filterByStatus(task) {
        let result = null;
        this.filters.status = this.filters.status || [];

        if (this.filters.status.includes(status.BLOCKED)) {
            result = task.Name.toLowerCase().includes('blocked');
        }

        if (this.filters.status.includes(status.DELEGATED)) {
            result = result || task.Name.toLowerCase().includes('delegated');
        }

        return result == null ? true : result;
    }

    filterByTaskGroup(task) {
        return (
            this.filters.taskGroupId
                ? task.TaskGroupId == this.filters.taskGroupId
                : true
        );
    }
};

export default Filterer;
