import Filterer from '@/utils/filterer';
import { completion, date, status } from '@/utils/filter-values';

(function() {
    describe('filterByTaskGroup', () => {
        it('should only return tasks in specified task group', () => {
            givenFilters({ taskGroupId: 1 });
            whenFiltersApplied();
            thenResultCountShouldBe(1);
            thenResultIdsShouldBe([2]);
        });

        it('should return all tasks when no task group specified', () => {
            givenFilters({});
            whenFiltersApplied();
            thenResultCountShouldBe(2);
            thenResultIdsShouldBe([1,2]);
        });
    });

    //// PRIVATE MEMBERS ////

    const _tasks = [
        { Id: 1, TaskGroupId: null },
        { Id: 2, TaskGroupId: 1 }
    ];

    let _filteredTasks = [];
    let _filterer;

    //// GIVEN ////

    function givenFilters(filters) {
        _filterer = new Filterer(_tasks, filters);
    }

    //// WHEN ////

    function whenFiltersApplied() {
        _filteredTasks = _filterer.filter();
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
