export default class TaskGroupHelper {
    constructor(taskGroups) {
        this.taskGroups = taskGroups;
    }

    allDescendents = (taskGroup) => {
        taskGroup =
            typeof taskGroup == 'number'
                ? this.taskGroups.find(tg => tg.Id == taskGroup)
                : taskGroup;

        let taskGroups = [ taskGroup ];

        this.taskGroups
            .filter(tg => tg.ParentTaskGroupId == taskGroup.Id)
            .forEach((tg) => {
                taskGroups = taskGroups.concat(this.allDescendents(tg));
            });

        return taskGroups;
    };
}
