// npm modules
import React from 'react';

// components
import TaskListItem from './task-list-item/task-list-item.jsx';

class TaskListItems extends React.Component {

    render() {
        const taskListItems = this.props.taskLists.map(function(taskList, key) {
            return (
                <TaskListItem
                    key={key}
                    taskList={taskList}
                />
            );
        });

        return (
            <ul className="task-list-items">
                {taskListItems}
                <li
                    className="add-task-list-link"
                    onClick={() => this.props.handleAddTaskListLinkClick(this.props.projectId)}
                >
                    + Add a task list
                </li>
            </ul>
        );
    }
}

TaskListItems.propTypes = {
    taskLists: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    projectId: React.PropTypes.number.isRequired,
    handleAddTaskListLinkClick: React.PropTypes.func.isRequired
};

export default TaskListItems;
