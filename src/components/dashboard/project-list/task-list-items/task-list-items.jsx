// npm modules
import React from 'react';

// components
import TaskListItem from './task-list-item/task-list-item.jsx';

class TaskListItems extends React.Component {

    render() {
        let taskListItems = this.props.taskLists.map(function(taskList, key) {
            return (
                <TaskListItem
                    key={key}
                    taskList={taskList}
                />
            );
        });

        if (taskListItems.length == 0) {
            taskListItems = <li className="add-task-list-link">Add a task list</li>;
        }

        return (
            <ul className="task-list-items">
                {taskListItems}
            </ul>
        );
    }
}

TaskListItems.propTypes = {
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default TaskListItems;
