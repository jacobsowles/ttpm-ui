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
                    handleDeleteTaskListClick={this.props.handleDeleteTaskListClick}
                />
            );
        }.bind(this));

        return (
            <ul className="task-list-items">
                {taskListItems}
                <li
                    className="add-task-list-link"
                    onClick={() => this.props.handleAddTaskListClick(this.props.projectId)}
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
    handleAddTaskListClick: React.PropTypes.func.isRequired,
    handleDeleteTaskListClick: React.PropTypes.func.isRequired
};

export default TaskListItems;
