import DateTime from '@/utils/datetime';
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
                this.filterByDate(task) &&
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

    filterByDate(task) {
        let result = null;
        this.filters.date = this.filters.date || [];

        if (this.filters.date.includes(date.TODAY)) {
            result = result ||
                DateTime.isBeforeOrSame(task.PlannedDate, DateTime.today()) ||
                DateTime.isBeforeOrSame(task.DueDate, DateTime.today());
        }

        if (this.filters.date.includes(date.TOMORROW)) {
            result = result ||
                DateTime.isSame(task.PlannedDate, DateTime.tomorrow()) ||
                DateTime.isSame(task.DueDate, DateTime.tomorrow());
        }

        if (this.filters.date.includes(date.UNPLANNED)) {
            result = result || !task.PlannedDate;
        }

        return result == null ? true : result;
    }

    filterByStatus(task) {
        let result = null;
        this.filters.status = this.filters.status || [];

        if (this.filters.status.includes(status.BLOCKED)) {
            result = result || task.Name.toLowerCase().includes('blocked');
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
