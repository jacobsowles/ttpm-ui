import TaskGroupHelpers from '@/utils/task-groups';
import TestHelpers from '@/tests/utils/test-helpers';

(function() {
    describe('allDescendents', () => {
        beforeEach(() => {
            givenTaskGroups([
                { Id: 1, ParentTaskGroupId: null },
                { Id: 2, ParentTaskGroupId: null },
                { Id: 3, ParentTaskGroupId: 1 }
            ]);
        });

        it('should return descendent task groups as array of objects', () => {
            whenDescendentTaskGroupsRetrieved(_taskGroups[0]);
            thenResultIdsShouldBe([1,3]);
        });

        it('should return descendent task groups using an ID parameter', () => {
            whenDescendentTaskGroupsRetrieved(1);
            thenResultIdsShouldBe([1,3]);
        });
    });

    //// PRIVATE MEMBERS ////

    let _resultTaskGroups = [];
    let _taskGroups = [];

    //// GIVEN ////

    function givenTaskGroups(taskGroups) {
        _taskGroups = taskGroups;
    }

    //// WHEN ////

    function whenDescendentTaskGroupsRetrieved(taskGroup) {
        const taskGroupHelpers = new TaskGroupHelpers(_taskGroups);
        _resultTaskGroups = taskGroupHelpers.allDescendents(taskGroup);
    }

    //// THEN ////

    function thenResultIdsShouldBe(ids) {
        TestHelpers.thenResultIdsShouldBe(ids, _resultTaskGroups);
    }
})();
