import TaskGroupHelper from './task-group-helper';
import TestHelper from '../test-helper';

describe('TaskGroupHelper', () => {
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
    const taskGroupHelpers = new TaskGroupHelper(_taskGroups);
    _resultTaskGroups = taskGroupHelpers.allDescendents(taskGroup);
}

//// THEN ////

function thenResultIdsShouldBe(ids) {
    TestHelper.thenResultIdsShouldBe(ids, _resultTaskGroups);
}
