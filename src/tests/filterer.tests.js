import Filterer from '@/utils/filterer';
import DateTime from '@/utils/datetime';
import { completion, date, status } from '@/utils/filter-values';
import TestHelpers from '@/tests/utils/test-helpers';

(function() {
    describe('filterByCompletion', () => {
        beforeEach(() => {
            givenTasks([
                { Id: 1, Complete: true },
                { Id: 2, Complete: false }
            ]);
        });

        it('should return only complete tasks when complete filter specified', () => {
            givenFilters({ completion: completion.COMPLETE });
            whenCompletionFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([1]);
        });

        it('should only return incomplete tasks when incomplete filter specified', () => {
            givenFilters({ completion: completion.INCOMPLETE });
            whenCompletionFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([2]);
        });

        it('should return all tasks when no filter specified', () => {
            givenFilters({ completion: null });
            whenCompletionFilterApplied();
            thenResultCountShouldBe(2);
            thenResultIdsShouldBe([1,2]);
        });
    });

    describe('filterByDate - today', () => {
        beforeEach(() => {
            givenFilters({ date: [ date.TODAY ] });
        });

        it('should return tasks planned for today', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.today().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should return tasks planned for the past', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.yesterday().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should return tasks due today', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.today().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should return tasks due in the past', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.yesterday().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should not return tasks planned for the future', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.tomorrow().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });

        it('should not return tasks due in the future', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.tomorrow().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });
    });

    describe('filterByDate - tomorrow', () => {
        beforeEach(() => {
            givenFilters({ date: [ date.TOMORROW ] });
        });

        it('should return tasks planned for tomorrow', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.tomorrow().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should return tasks due tomorrow', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.tomorrow().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should not return tasks planned for the past', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.yesterday().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });

        it('should not return tasks due in the past', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.yesterday().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });

        it('should not return tasks planned for today', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.today().format(_dateFormat) }]);
            givenFilters({ date: [ date.TOMORROW ] });
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });

        it('should not return tasks due today', () => {
            givenTasks([{ Id: 1, DueDate: DateTime.today().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });
    });

    describe('filterByDate - today and tomorrow', () => {
        beforeEach(() => {
            givenFilters({ date: [ date.TODAY, date.TOMORROW ] });
        });

        it('should return tasks planned for today, tomorrow, or in the past when both filters specified', () => {
            givenTasks([
                { Id: 1, PlannedDate: DateTime.today().format(_dateFormat) },
                { Id: 2, PlannedDate: DateTime.tomorrow().format(_dateFormat) },
                { Id: 3, PlannedDate: DateTime.yesterday().format(_dateFormat) }
            ]);
            whenDateFilterApplied();
            thenResultCountShouldBe(3);
        });

        it('should return tasks due today, tomorrow, or in the past when both filters specified', () => {
            givenTasks([
                { Id: 1, DueDate: DateTime.today().format(_dateFormat) },
                { Id: 2, DueDate: DateTime.tomorrow().format(_dateFormat) },
                { Id: 3, DueDate: DateTime.yesterday().format(_dateFormat) }
            ]);
            whenDateFilterApplied();
            thenResultCountShouldBe(3);
        });
    });

    describe('filterByDate - unplanned', () => {
        beforeEach(() => {
            givenFilters({ date: [ date.UNPLANNED ] });
        });

        it('should return tasks that have no planned date', () => {
            givenTasks([{ Id: 1, PlannedDate: null }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(1);
        });

        it('should not return tasks that have planned date', () => {
            givenTasks([{ Id: 1, PlannedDate: DateTime.today().format(_dateFormat) }]);
            whenDateFilterApplied();
            thenResultCountShouldBe(0);
        });
    });

    describe('filterByStatus', () => {
        beforeEach(() => {
            givenTasks([
                { Id: 1, Name: 'Test Task (BLOCKED)' },
                { Id: 2, Name: 'Test Task (DELEGATED)' },
                { Id: 3, Name: 'Test Task' }
            ]);
        });

        it('should only return blocked tasks when only blocked filter specified', () => {
            givenFilters({ status: [status.BLOCKED] });
            whenStatusFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([1]);
        });

        it('should only return delegated tasks when only delegated filter specified', () => {
            givenFilters({ status: [status.DELEGATED] });
            whenStatusFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([2]);
        });

        it('should only return blocked and delegated tasks when both filters specified', () => {
            givenFilters({ status: [status.BLOCKED, status.DELEGATED] });
            whenStatusFilterApplied();
            thenResultCountShouldBe(2);
            thenResultIdsShouldBe([1,2]);
        });

        it('should return all tasks when no filters specified', () => {
            givenFilters({ status: [] });
            whenStatusFilterApplied();
            thenResultCountShouldBe(3);
            thenResultIdsShouldBe([1,2,3]);
        });
    });

    describe('filterByTaskGroup', () => {
        beforeEach(() => {
            givenTasks([
                { Id: 1, TaskGroupId: null },
                { Id: 2, TaskGroupId: 1 },
                { Id: 3, TaskGroupId: 2 }
            ]);
        });

        it('should only return tasks in specified task group', () => {
            givenFilters({ taskGroupId: 1 });
            whenTaskGroupFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([2]);
        });

        it('should return all tasks when no task group specified', () => {
            givenFilters({});
            whenTaskGroupFilterApplied();
            thenResultCountShouldBe(3);
            thenResultIdsShouldBe([1,2,3]);
        });
    });

    //// PRIVATE MEMBERS ////

    const _dateFormat = 'YYYY-MM-DD';
    const _taskGroups = [
        { Id: 1 },
        { Id: 2 }
    ];

    let _filteredTasks = [];
    let _filterer;
    let _tasks;

    //// GIVEN ////

    function givenFilters(filters) {
        _filterer = new Filterer(_tasks, _taskGroups, filters);
    }

    function givenTasks(tasks) {
        _tasks = tasks;
    }

    //// WHEN ////

    function whenAllFiltersApplied() {
        _filteredTasks = _filterer.filter();
    }

    function whenCompletionFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByCompletion(task));
    }

    function whenDateFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByDate(task));
    }

    function whenStatusFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByStatus(task));
    }

    function whenTaskGroupFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByTaskGroup(task));
    }

    //// THEN ////

    function thenResultCountShouldBe(count) {
        expect(_filteredTasks.length).toBe(count);
    }

    function thenResultIdsShouldBe(ids) {
        TestHelpers.thenResultIdsShouldBe(ids, _filteredTasks);
    }
})();
