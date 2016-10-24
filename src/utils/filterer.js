import DateTime from '@/utils/datetime';
import TaskGroupHelper from '@/utils/task-groups';
import { completion, date, status } from '@/utils/filter-values';

const Filterer = class Filterer {
    constructor(tasks, taskGroups, filters) {
        this.tasks = tasks;
        this.filters = filters;
        this.taskGroupHelper = new TaskGroupHelper(taskGroups);
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
        if (!this.filters.taskGroupId) {
            return true;
        }

        const taskGroupIds =
            this.taskGroupHelper.allDescendents(this.filters.taskGroupId)
            .map(tg => tg.Id);

        return taskGroupIds.includes(task.TaskGroupId);
    }
};

export default Filterer;
