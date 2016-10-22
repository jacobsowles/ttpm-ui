import Filterer from '@/utils/filterer';
import { completion, date, status } from '@/utils/filter-values';

(function() {
    describe('filterByCompletion', () => {
        it('should only return complete tasks when complete filter specified', () => {
            givenFilters({ completion: completion.COMPLETE });
            whenCompletionFilterApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([1]);
        });

        it('should only return incomplete tasks when incomplete filter specified', () => {
            givenFilters({ completion: completion.INCOMPLETE });
            whenCompletionFilterApplied();
            thenResultCountShouldBe(2);
            thenResultIdsShouldBe([2,3]);
        });

        it('should return all tasks when no filter specified', () => {
            givenFilters({});
            whenCompletionFilterApplied();
            thenResultCountShouldBe(3);
            thenResultIdsShouldBe([1,2,3]);
        });
    });

    describe('filterByStatus', () => {
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
            givenFilters({});
            whenStatusFilterApplied();
            thenResultCountShouldBe(3);
            thenResultIdsShouldBe([1,2,3]);
        });
    });

    describe('filterByTaskGroup', () => {
        it('should only return tasks in specified task group', () => {
            givenFilters({ taskGroupId: 1 });
            whenTaskGroupFilterApplied();
            thenResultCountShouldBe(2);
            thenResultIdsShouldBe([2,3]);
        });

        it('should return all tasks when no task group specified', () => {
            givenFilters({});
            whenTaskGroupFilterApplied();
            thenResultCountShouldBe(3);
            thenResultIdsShouldBe([1,2,3]);
        });
    });

    //// PRIVATE MEMBERS ////

    const _tasks = [
        { Id: 1, TaskGroupId: null, Name: 'Test Task (BLOCKED)', Complete: true },
        { Id: 2, TaskGroupId: 1, Name: 'Test Task (DELEGATED)', Complete: false },
        { Id: 3, TaskGroupId: 1, Name: 'Test Task', Complete: false }
    ];

    let _filteredTasks = [];
    let _filterer;

    //// GIVEN ////

    function givenFilters(filters) {
        _filterer = new Filterer(_tasks, filters);
    }

    //// WHEN ////

    function whenAllFiltersApplied() {
        _filteredTasks = _filterer.filter();
    }

    function whenCompletionFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByCompletion(task));
    }

    function whenStatusFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByStatus(task));
    }

    function whenTaskGroupFilterApplied() {
        _filteredTasks = _tasks.filter(task => _filterer.filterByTaskGroup(task));
    }

    //// THEN ////

    function thenResultCountShouldBe(count) {
        console.log(_filteredTasks);
        expect(_filteredTasks.length).toBe(count);
    }

    function thenResultIdsShouldBe(ids) {
        ids.forEach(id => expect(_filteredTasks.filter(task => task.Id == id).length).toBe(1));
    }
})();
